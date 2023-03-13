package com.exmaple.flory.service;

import com.exmaple.flory.dto.diary.DiaryDto;
import com.exmaple.flory.dto.diary.DiaryRequestDto;
import com.exmaple.flory.dto.flower.FlowerEmotionDto;
import com.exmaple.flory.entity.*;
import com.exmaple.flory.repository.*;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(SpringExtension.class)
public class DiaryServiceTest {

    @InjectMocks
    DiaryService diaryService;

    @Mock
    CommentService commentService;

    @Mock
    DiaryRepository diaryRepository;

    @Mock
    CommentRepository commentRepository;

    @Mock
    GardenRepository gardenRepository;

    @Mock
    FlowerRepository flowerRepository;

    @Mock
    EmotionRepository emotionRepository;

    private final Member member = Member
            .builder()
            .userId(1L)
            .email("ssafy@naver.com")
            .password("1234")
            .nickname("abcd")
            .build();

    private final Garden garden = Garden
            .builder()
            .member(member)
            .path("/usr/app")
            .build();

    private final Emotion emotion = Emotion.builder()
            .id(1L).type("type").build();

    private final Flower flower = Flower.builder()
            .id(1L).name("flower").language("language").emotion(emotion).build();

    private final FlowerEmotionDto flowerEmotionDto = FlowerEmotionDto.builder()
            .fid(1L).eid(1L).emotion(emotion.getType()).flowerName(flower.getName()).language(flower.getLanguage()).build();

    private final DiaryDto diaryDto = DiaryDto.builder()
            .id(1L).content("content").imgSrc("imgSrc").lat("lat").lng("lng").publicStatus("전체공개").x("x").y("y").z("z")
            .flowerEmotion(flowerEmotionDto).build();


    @DisplayName("일기 등록하기 테스트")
    @Test
    public void insertDiaryTest() throws Exception {
        List<Long> info = new ArrayList<>();
        info.add(emotion.getId());

        when(diaryRepository.save(any())).thenReturn(diaryDto.toEntity());
        when(gardenRepository.findById(any())).thenReturn(Optional.ofNullable(garden));
        when(flowerRepository.findById(any())).thenReturn(Optional.ofNullable(flower));
        when(flowerRepository.getEmotionKey(any())).thenReturn(info);
        when(emotionRepository.findById(any())).thenReturn(Optional.of(emotion));

        DiaryRequestDto diaryRequestDto = DiaryRequestDto.builder()
                .content(diaryDto.getContent()).x(diaryDto.getX()).y(diaryDto.getY()).z(diaryDto.getZ()).build();

        DiaryDto result = diaryService.insertDiary(diaryRequestDto);

        assertEquals(diaryDto.getContent(),result.getContent());
    }

    @DisplayName("일기 상세내용 가져오기 테스트")
    @Test
    public void getDiaryTest() throws Exception{
        List<Long> info = new ArrayList<>();
        info.add(emotion.getId());

        Diary diary = diaryDto.toEntity();
        diary.setFlower(flower);
        diary.setGarden(garden);

        when(diaryRepository.findById(any())).thenReturn(Optional.of(diary));
        when(flowerRepository.findById(any())).thenReturn(Optional.ofNullable(flower));
        when(flowerRepository.getEmotionKey(any())).thenReturn(info);
        when(emotionRepository.findById(any())).thenReturn(Optional.of(emotion));

        DiaryDto result = diaryService.getDiary(diaryDto.getId());

        assertEquals(diaryDto.getContent(),result.getContent());
    }

    @DisplayName("일기 삭제하기 테스트")
    @Test
    public void deleteDiaryTest(){
        when(diaryRepository.findById(any())).thenReturn(Optional.ofNullable(diaryDto.toEntity()));

        int result = diaryService.deleteDiary(diaryDto.getId());

        assertEquals(1,result);
    }

    @DisplayName("일기 수정하기 테스트")
    @Test
    public void updateDiaryTest(){
        when(diaryRepository.save(any())).thenReturn(diaryDto.toEntity());

        DiaryDto result = diaryService.updateDiary(diaryDto);

        assertEquals(diaryDto.getContent(),result.getContent());
    }

    @DisplayName("해당 정원의 일기 목록 조회 테스트")
    @Test
    public void getDiaryByGardenTest() throws Exception{
        List<Diary> diaryList = new ArrayList<>();
        List<Long> info = new ArrayList<>();
        info.add(emotion.getId());

        Diary diary = diaryDto.toEntity();
        diary.setFlower(flower);
        diary.setGarden(garden);
        diaryList.add(diary);

        when(diaryRepository.findById(any())).thenReturn(Optional.of(diary));
        when(flowerRepository.findById(any())).thenReturn(Optional.ofNullable(flower));
        when(flowerRepository.getEmotionKey(any())).thenReturn(info);
        when(emotionRepository.findById(any())).thenReturn(Optional.of(emotion));
        when(diaryRepository.findByGardenId(any())).thenReturn(diaryList);

        List<DiaryDto> result = diaryService.getDiaryListGarden(1L);

        assertEquals(result.size(),diaryList.size());
    }

    @DisplayName("유저의 일기 목록 조회 테스트")
    @Test
    public void getDiaryByMemberTest() throws Exception{
        List<Diary> diaryDtoList = new ArrayList<>();

        diaryDtoList.add(diaryDto.toEntity());
        when(diaryRepository.findByMemberId(any())).thenReturn(diaryDtoList);

        List<DiaryDto> result = diaryService.getDiaryListByUser(1L);

        assertEquals(result.size(),diaryDtoList.size());
    }

    @DisplayName("좌표값으로 일기 조회 테스트")
    @Test
    public void getDiaryByLocationTest() throws Exception{
        when(diaryRepository.findByXAndYAndZ(any(),any(),any())).thenReturn(diaryDto.toEntity());
        when(commentService.getCommentList(any())).thenReturn(new ArrayList<>());

        DiaryDto result = diaryService.getDiaryByLocation("10","10","10");

        assertEquals(diaryDto.getContent(),result.getContent());
    }
}
