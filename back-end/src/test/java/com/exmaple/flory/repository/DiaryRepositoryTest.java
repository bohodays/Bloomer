package com.exmaple.flory.repository;

import com.exmaple.flory.dto.diary.DiaryDto;
import com.exmaple.flory.entity.Diary;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Optional;
import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(SpringExtension.class)
@DataJpaTest
public class DiaryRepositoryTest {

    @Autowired
    DiaryRepository diaryRepository;

    private final DiaryDto diaryDto = DiaryDto.builder()
            .id(1L).content("content").imgSrc("imgSrc").lat("lat").lng("lng").publicStatus("전체공개").x("x").y("y").z("z")
            .build();

    @DisplayName("일기 등록하기 테스트")
    @Test
    public void insertDiaryTest() throws Exception{
        Diary diary = diaryRepository.save(diaryDto.toEntity());

        Optional<Diary> result = diaryRepository.findById(diary.getId());

        if(result.isEmpty()) throw new Exception();

        assertEquals(diary.getContent(),result.get().getContent());

    }

    @DisplayName("일기 삭제하기 테스트")
    @Test
    public void deleteDiaryTest(){
        Diary diary = diaryRepository.save(diaryDto.toEntity());

        diaryRepository.delete(diary);

        Optional<Diary> result = diaryRepository.findById(1L);

        assertEquals(result,Optional.empty());

    }

    @DisplayName("좌표값으로 일기 조회 테스트")
    @Test
    public void getDiaryByLocationTest(){
        Diary diary = diaryRepository.save(diaryDto.toEntity());

        Diary result = diaryRepository.findByXAndYAndZ("x","y","z");

        assertEquals(diary.getContent(),result.getContent());
    }
}
