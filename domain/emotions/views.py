from django.shortcuts import render
# from django.http.response import HTTPResponse
from django.core import serializers
from .emotionClassifier import BERTClassifier, BERTDataset
from django.http import JsonResponse
#KoBERT
import torch
from torch import nn
import torch.nn.functional as F
import torch.optim as optim
from torch.utils.data import Dataset, DataLoader
import gluonnlp as nlp
import numpy as np
from tqdm import tqdm, tqdm_notebook
import pandas as pd

import sys, os
from kobert.utils import get_tokenizer
from kobert.pytorch_kobert import get_pytorch_kobert_model

#transformers
from transformers import AdamW
from transformers.optimization import get_cosine_schedule_with_warmup


max_len = 64
batch_size = 64

#cpu로 설정
device = torch.device("cpu")

# #BERT 모델, Vocabulary 불러오기
bertmodel, vocab = get_pytorch_kobert_model()

# # BERT 모델 설정
model = BERTClassifier(bertmodel,  dr_rate=0.5).to(device) 
checkpoint=torch.load('/usr/src/app/domain/emotions/pickle/model.pt', map_location=device)
model.load_state_dict(checkpoint['model_state_dict'])

#토큰화
tokenizer = get_tokenizer()
tok = nlp.data.BERTSPTokenizer(tokenizer, vocab, lower=False)

#===============================

def analysis(request):

    if request.method == 'POST':
        data = request.POST['text']

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
            fProb = F.softmax(out, dim=1).detach().cpu().numpy()
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