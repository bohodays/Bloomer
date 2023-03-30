from django.shortcuts import render
# from django.http.response import HTTPResponse
from django.core import serializers
from .emotionClassifier import BERTClassifier, BERTDataset
from django.http import JsonResponse
#KoBERT
import torch
from torch import nn
import torch.nn.functional as Fun
import torch.optim as optim
from torch.utils.data import Dataset, DataLoader
import gluonnlp as nlp
import numpy as np
from tqdm import tqdm, tqdm_notebook
import pandas as pd
from numpy import dot
from numpy.linalg import norm

import sys, os
from kobert.utils import get_tokenizer
from kobert.pytorch_kobert import get_pytorch_kobert_model
from sklearn.feature_extraction.text import TfidfVectorizer
#transformers
from transformers import AdamW
from transformers.optimization import get_cosine_schedule_with_warmup
from sklearn.metrics.pairwise import cosine_similarity
import json
from .models import Emotion, Flower, Diary, Garden, Music,Member
from django.core import serializers
from django.db.models import Q, F, Value
from django.db.models import Count
max_len = 64
batch_size = 64

#cpu로 설정
device = torch.device("cpu")

# #BERT 모델, Vocabulary 불러오기
bertmodel, vocab = get_pytorch_kobert_model()

# # BERT 모델 설정
model = BERTClassifier(bertmodel,  dr_rate=0.5).to(device) 
checkpoint=torch.load('/usr/src/app/domain/emotions/pickle/model.pt', map_location=device)
#checkpoint=torch.load('C:/Users/SSAFY/git/S08P22A205/domain/emotions/model.pt', map_location=device)
# checkpoint=torch.load('C:/Users/SSAFY/ssafy08/S08P22A205/domain/emotions/pickle/model.pt', map_location=device)
model.load_state_dict(checkpoint['model_state_dict'])

#토큰화
tokenizer = get_tokenizer()
tok = nlp.data.BERTSPTokenizer(tokenizer, vocab, lower=False)

#csv파일 가져오기
music_data = pd.read_csv("/usr/src/app/emotions/music_vector.csv",index_col=0)

#음악 content에 있는 모든 태그 가져오기
music_content = music_data['content']
music_title = music_data['제목']
music_tags = music_content.to_numpy()

train_data = []

for str in music_tags :
  train_data.append(str.replace(',',''))

print(f"음악 개수: {len(train_data)}",)

tfidf_vectorizer = TfidfVectorizer()
tfidf_matrix = tfidf_vectorizer.fit_transform(train_data)

cosine_sim = cosine_similarity(tfidf_matrix, tfidf_matrix)
title_to_index = dict(zip(music_title, music_data.index))

#===============================

def nearestUser(request, emotion,user_id):

    if request.method == 'GET':
        
        emotions = ["기쁨","안정","당황","분노","불안","상처","슬픔"]

        #member table에서 전체 유저 정보 가져오기
        members = Member.objects.all()

        #user id가 key user객체를 value로하는 딕셔너리 생성 
        idToUser = dict()

        for member in members:
            idToUser[member.user_id] = member

        #[classic,jazz,pop,reggae,RnB,electronic]을 벡터화 하기 true면 1 false면 0
        jenre_vector = [] # 장르 벡터 2d array

        for member in members:
            cur = convertVector(member)
            jenre_vector.append((cur,member.user_id))

        #각 유저별로 코사인 유사도계산

        curUserVector = convertVector(idToUser[user_id]) # 현재 유저의 음악 벡터

        result = [] #결과 계산값

        for vector in jenre_vector:

            res = cos_sim(curUserVector,vector[0])
            result.append((res,vector[1])) # 결과값과 user_id저장

        #코사인 유사도 큰 순으로 정렬
        result.sort(key=lambda x: -x[0]) 
        
        #가장 큰 값을 가지는 인덱스 받아서 딕셔너리로 user id가져오기
        #자기자신이 0번째니까 그다음유저가 가장 유사한 녀석임
        similarUser = idToUser[result[1][1]].user_id

        #similarUser가 어떤 감정일 때 어떤 노래를 듣는지 찾아야함.

        #json_data = json.dumps(serialize_object(idToUser[result[1][1]]))

        queryset = Diary.objects.filter(
    Q(gid__uid=user_id) &
    Q(fid__eid__large_category=emotions[emotion]) &
    Q(fid__id=F('fid')) &
    Q(mid__id=F('mid'))
).select_related('fid__eid', 'mid').values(
    'fid__eid__large_category', 'mid__title'
).first()

        serialized_list = ''

        if queryset:
            music = queryset['mid__title']
            music_list = get_recommendations(music)
            print(music_list)
            serialized_list = json.dumps(music_list)

        else:
            print("대응되는 queryset 없음")
            result = (Music.objects.annotate(count=Count('diary')).order_by('-count')[:5].values('id', 'title', 'count'))

            ret = []

            for music in result:
                ret.append(music['title'])

            serialized_list = json.dumps(ret)

        return JsonResponse({"result" : serialized_list})
        
    else:
        return JsonResponse({"result" : "GET으로 요청하시오"})

def analysis(request):

    if request.method == 'POST':
        # print(request.POST['text'])
        data = json.loads(request.body)['text']

        result = predict(data)
        # results = calc_result(result)

        return JsonResponse({"result":result})
    else:
        return JsonResponse({"result":"POST로 요청하시오"})
    

def predict(text):

    data = [text, '0']
    dataset_another = [data]

    # TensorDataset(inputs, labels, attention masks 포함)으로 만들어주기
    another_test = BERTDataset(dataset_another, 0, 1, tok, max_len, True, False)

    # 배치, 데이터 로더 설정
    test_dataloader = torch.utils.data.DataLoader(another_test, batch_size=batch_size, num_workers=2)

    model.eval()

    with torch.no_grad():

        for batch_id, (token_ids, valid_length, segment_ids, label) in enumerate(test_dataloader):

            token_ids = token_ids.long().to(device)
            segment_ids = segment_ids.long().to(device)
            valid_length= valid_length
            label = label.long().to(device)

            out = model(token_ids, valid_length, segment_ids)
            print("BERT 결과", out)

            # 단순 비율 구하기
            makeProb(out[0].detach().cpu().numpy().tolist())

            # 소프트맥스 적용 비율 구하기
            fProb = Fun.softmax(out, dim=1).detach().cpu().numpy()
            result = fProb.tolist()[0]
            print("소프트맥스확률", result)

            emotion = ["기쁨이", "안정이", "당황이", "분노가", "불안이", "상처가", "슬픔이"]
            print(">> 입력하신 내용에서 " + emotion[np.argmax(out[0])] + " 느껴집니다.")

    return result


def makeProb(logits):
    probs = [1/(1+np.exp(-logit)) for logit in logits]
    rel_probs = [prob/sum(probs) for prob in probs]
    
    print("상대확률", rel_probs)
    return rel_probs

def cos_sim(A, B):
  return dot(A, B)/(norm(A)*norm(B))    

def convertVector(member):
    cur = []
    #클래식
    cur.append(int.from_bytes(member.classic, byteorder='big', signed=False))

    #재즈
    cur.append(int.from_bytes(member.jazz, byteorder='big', signed=False))

    #pop
    cur.append(int.from_bytes(member.pop, byteorder='big', signed=False))

    #reggae
    cur.append(int.from_bytes(member.reggae, byteorder='big', signed=False))
    
    #RnB
    cur.append(int.from_bytes(member.RnB, byteorder='big', signed=False))

    #electronic
    cur.append(int.from_bytes(member.electronic, byteorder='big', signed=False))

    return cur
    
def serialize_object(obj):
    return {
        'nickname' : obj.nickname,
        'email': obj.email,
        'user_id' : obj.user_id
    }

def get_recommendations(title, cosine_sim=cosine_sim):
    # 선택한 음악의 타이틀로부터 해당 음악의 인덱스를 받아온다.
    idx = title_to_index[title]

    # 해당 음악과 모든 음악과의 유사도를 가져온다.
    sim_scores = list(enumerate(cosine_sim[idx]))

    # 유사도에 따라 음악들을 정렬한다.
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)

    # 가장 유사한 5개의 음악를 받아온다.
    sim_scores = sim_scores[:5]

    # 가장 유사한 5개의 음악의 인덱스를 얻는다.
    music_indices = [idx[0] for idx in sim_scores]
    ret = []

    for idx in music_indices:
        ret.append(music_title.iloc[idx])

    return ret   