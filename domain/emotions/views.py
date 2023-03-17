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


import multiprocessing


max_len = 64
batch_size = 64

#cpu로 설정
device = torch.device("cpu")

# #BERT 모델, Vocabulary 불러오기
bertmodel, vocab = get_pytorch_kobert_model()

# # BERT 모델 설정
model = BERTClassifier(bertmodel,  dr_rate=0.5).to(device) 
checkpoint=torch.load('C:/Users/SSAFY/ssafy08/S08P22A205/domain/emotions/pickle/model.pt', map_location=device)
model.load_state_dict(checkpoint['model_state_dict'])


#===============================


def analysis(request):
    multiprocessing.freeze_support()
    if request.method == 'POST':
        data = request.POST['text']

        result = predict(model, vocab, data)
        # results = calc_result(result)

        return JsonResponse({"result":result.tolist()})
    else:
        return JsonResponse({"result":"POST로 요청하시오"})
    

def predict(model, vocab, text):
    multiprocessing.freeze_support()
    max_len = 64
    batch_size = 64

    #토큰화
    tokenizer = get_tokenizer()
    tok = nlp.data.BERTSPTokenizer(tokenizer, vocab, lower=False)

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
            print("out", out)
            print("softmax out", F.softmax(out))
            out = F.softmax(out)

            test_eval=[]
            for i in out:
                logits = i
                logits = logits.detach().cpu().numpy() # graph에서 분리한 새로운 tensor를 return -> cpu 메모리로 옮기기 -> np list로 만들기

                if np.argmax(logits) == 0:
                    test_eval.append("기쁨이")
                elif np.argmax(logits) == 1:
                    test_eval.append("안정이")
                elif np.argmax(logits) == 2:
                    test_eval.append("당황이")
                elif np.argmax(logits) == 3:
                    test_eval.append("분노가")
                elif np.argmax(logits) == 4:
                    test_eval.append("불안이")
                elif np.argmax(logits) == 5:
                    test_eval.append("상처가")
                elif np.argmax(logits) == 6:
                    test_eval.append("슬픔이")

            print(">> 입력하신 내용에서 " + test_eval[0] + " 느껴집니다.")
    sm_logits = logits.tolist()
    print("logits", list(map(lambda x:format(x,'f'), sm_logits)))
    n_logits = normalize(sm_logits)
    print(n_logits)
    return logits


def normalize(result):
    s = sum(result)
    list = []
    for val in result:
        val = val/s
        list.append(round(val,4)*100)

    print(list)
    return list