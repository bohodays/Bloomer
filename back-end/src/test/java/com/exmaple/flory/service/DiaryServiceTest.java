package com.exmaple.flory.service;

import com.exmaple.flory.dto.diary.DiaryDto;
import com.exmaple.flory.dto.diary.DiaryRequestDto;
import com.exmaple.flory.entity.Diary;
import com.exmaple.flory.entity.Garden;
import com.exmaple.flory.entity.Member;
import com.exmaple.flory.repository.CommentRepository;
import com.exmaple.flory.repository.DiaryRepository;
import com.exmaple.flory.repository.GardenRepository;
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

    private final DiaryDto diaryDto = DiaryDto.builder()
            .id(1L).content("content").imgSrc("imgSrc").lat("lat").lng("lng").publicStatus("전체공개").x("x").y("y").z("z")
            .build();

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

    @DisplayName("일기 등록하기 테스트")
    @Test
    public void insertDiaryTest() throws Exception {
        when(diaryRepository.save(any())).thenReturn(diaryDto.toEntity());
        when(gardenRepository.findById(any())).thenReturn(Optional.ofNullable(garden));

        DiaryRequestDto diaryRequestDto = DiaryRequestDto.builder()
                .content(diaryDto.getContent()).x(diaryDto.getX()).y(diaryDto.getY()).z(diaryDto.getZ()).build();

        DiaryDto result = diaryService.insertDiary(diaryRequestDto);

        assertEquals(diaryDto.getContent(),result.getContent());
    }

    @DisplayName("일기 상세내용 가져오기 테스트")
    @Test
    public void getDiaryTest() throws Exception{
        when(diaryRepository.findById(any())).thenReturn(Optional.ofNullable(diaryDto.toEntity()));

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
        List<Diary> diaryDtoList = new ArrayList<>();

        diaryDtoList.add(diaryDto.toEntity());
        when(diaryRepository.findByGardenId(any())).thenReturn(diaryDtoList);

        List<DiaryDto> result = diaryService.getDiaryListGarden(1L);

        assertEquals(result.size(),diaryDtoList.size());
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
