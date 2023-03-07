package com.exmaple.flory.service;

import com.exmaple.flory.dto.diary.DiaryDto;
import com.exmaple.flory.repository.DiaryRepository;
import com.exmaple.flory.entity.Diary;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class DiaryService {
    @Autowired
    DiaryRepository diaryRepository;

    public DiaryDto insertDiary(DiaryDto diaryDto){
        return diaryRepository.save(diaryDto.toEntity()).toDto();
    }

    public DiaryDto getDiary(Long diary_id) throws Exception {
        Optional<Diary> diary = diaryRepository.findById(diary_id);

        if(diary.isEmpty()){
            throw new Exception();
        }

        return diary.get().toDto();
    }

    public int deleteDiary(Long diary_id){
        Optional<Diary> diary = diaryRepository.findById(diary_id);

        if(diary.isPresent()){
            diaryRepository.delete(diary.get());
            return 1;
        }
        else{
            return 0;
        }
    }

    public DiaryDto updateDiary(DiaryDto diaryDto){
        return diaryRepository.save(diaryDto.toEntity()).toDto();
    }

//    public List<DiaryDto>getDiaryListGarden(Long gardenId){
//        List<Diary> diaryList = diaryRepository.findByGarden_Id(gardenId);
//        List<DiaryDto> diaryDtoList = new ArrayList<>();
//
//        for(int i=0;i<diaryList.size();i++){
//            diaryDtoList.add(diaryList.get(i).toDto());
//        }
//
//        return diaryDtoList;
//    }

//    public List<DiaryDto>getDiaryListUser(Long userId){
//        List<Diary> diaryList = diaryRepository.findByUserId(userId);
//        List<DiaryDto> diaryDtoList = new ArrayList<>();
//
//        for(int i=0;i<diaryList.size();i++){
//            diaryDtoList.add(diaryList.get(i).toDto());
//        }
//
//        return diaryDtoList;
//    }

    public DiaryDto getDiaryByLocation(String x, String y, String z){
        return diaryRepository.findByXAndYAndZ(x,y,z).toDto();
    }
}
