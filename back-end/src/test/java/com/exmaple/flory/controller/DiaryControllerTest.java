package com.exmaple.flory.controller;

import com.exmaple.flory.dto.diary.DiaryDayDto;
import com.exmaple.flory.dto.diary.DiaryDto;
import com.exmaple.flory.service.DiaryService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


@WebMvcTest(controllers = DiaryController.class)
@WithMockUser
@MockBean(JpaMetamodelMappingContext.class)
public class DiaryControllerTest {

    @MockBean
    private DiaryService diaryService;

    @SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection")
    @Autowired
    private MockMvc mockMvc;

    private final DiaryDto diaryDto = DiaryDto.builder()
            .id(1L).content("content").imgSrc("imgSrc").lat(10).lng(10).publicStatus("전체공개").x("x").y("y").z("z")
            .build();


    @DisplayName("일기 등록 테스트")
    @Test
    public void insertDiaryTest() throws Exception {
        when(diaryService.insertDiary(any())).thenReturn(diaryDto);

        mockMvc.perform(post("/api/diary").with(csrf())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(diaryDto.toEntity())))
                .andExpect(status().isOk())
                .andDo(print());

    }

    @DisplayName("일기 등록 오류 테스트")
    @Test
    public void insertDiaryExceptionTest() throws Exception{
        when(diaryService.insertDiary(any())).thenThrow(new RuntimeException());

        mockMvc.perform(post("/api/diary").with(csrf())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(diaryDto.toEntity())))
                .andExpect(status().isInternalServerError())
                .andDo(print());
    }

    @DisplayName("일기내용 상세 가져오기 테스트")
    @Test
    public void getDiaryTest() throws Exception{
        when(diaryService.getDiary(any())).thenReturn(diaryDto);

        mockMvc.perform(get("/api/diary/{diaryId}",1))
                .andExpect(status().isOk())
                .andDo(print());
    }

    @DisplayName("일기내용 상세 가져오기 오류 테스트")
    @Test
    public void getDiaryExceptionTest() throws Exception{
        when(diaryService.getDiary(any())).thenThrow(new RuntimeException());

        mockMvc.perform(get("/api/diary/{diaryId}",1))
                .andExpect(status().isInternalServerError())
                .andDo(print());
    }

    @DisplayName("일기내용 삭제 테스트")
    @Test
    public void deleteDiaryTest() throws Exception{
        when(diaryService.deleteDiary(any())).thenReturn(1);

        mockMvc.perform(delete("/api/diary/{diaryId}",1).with(csrf()))
                .andExpect(status().isOk())
                .andDo(print());
    }

    @DisplayName("일기내용 삭제 오류 테스트")
    @Test
    public void deleteDiaryExceptionTest() throws Exception{
        when(diaryService.deleteDiary(any())).thenThrow(new RuntimeException());

        mockMvc.perform(delete("/api/diary/{diaryId}",1).with(csrf()))
                .andExpect(status().isInternalServerError())
                .andDo(print());
    }

    @DisplayName("일기 수정하기 테스트")
    @Test
    public void updateDiaryTest() throws Exception{
        when(diaryService.updateDiary(any())).thenReturn(diaryDto);

        mockMvc.perform(put("/api/diary").with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(new ObjectMapper().writeValueAsString(diaryDto.toEntity())))
                .andExpect(status().isOk())
                .andDo(print());

    }

    @DisplayName("일기 수정하기 오류 테스트")
    @Test
    public void updateDiaryExceptionTest() throws Exception{
        when(diaryService.updateDiary(any())).thenThrow(new RuntimeException());

        mockMvc.perform(put("/api/diary").with(csrf())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(diaryDto.toEntity())))
                .andExpect(status().isInternalServerError())
                .andDo(print());

    }

    @DisplayName("해당 정원의 일기 목록 조회 테스트")
    @Test
    public void getDiaryByGardenTest() throws Exception{
        List<DiaryDto> diaryDtoList = new ArrayList<>();

        diaryDtoList.add(diaryDto);

        when(diaryService.getDiaryListByGarden(any(),any())).thenReturn(diaryDtoList);

        mockMvc.perform(get("/api/diary/list/{gardenId}/{requestId}",1,1))
                .andExpect(status().isOk())
                .andDo(print());
    }

    @DisplayName("해당 정원의 일기 목록 조회 오류 테스트")
    @Test
    public void getDiaryByGardenExceptionTest() throws Exception{
        when(diaryService.getDiaryListByGarden(any(),any())).thenThrow(new RuntimeException());

        mockMvc.perform(get("/api/diary/list/{gardenId}/{requestId}",1,1))
                .andExpect(status().isInternalServerError())
                .andDo(print());
    }

    @DisplayName("유저의 일기 목록 조회 테스트")
    @Test
    public void getDiaryByUserTest() throws Exception{
        List<DiaryDto> diaryDtoList = new ArrayList<>();

        diaryDtoList.add(diaryDto);

        when(diaryService.getDiaryListByUser(any(),any())).thenReturn(diaryDtoList);

        mockMvc.perform(get("/api/diary/diary-list/{userId}/{requestId}",1,1))
                .andExpect(status().isOk())
                .andDo(print());
    }

    @DisplayName("유저의 일기 목록 조회 오류 테스트")
    @Test
    public void getDiaryByUserExceptionTest() throws Exception{
        when(diaryService.getDiaryListByUser(any(),any())).thenThrow(new RuntimeException());

        mockMvc.perform(get("/api/diary/diary-list/{userId}/{requestId}",1,1))
                .andExpect(status().isInternalServerError())
                .andDo(print());
    }

    @DisplayName("지도 범위 내의 일기 목록 조회 테스트")
    @Test
    public void getDiaryInMapTest() throws Exception{
        List<DiaryDto> diaryDtoList = new ArrayList<>();
        Map<String,String> info = new HashMap<>();

        diaryDtoList.add(diaryDto);

        info.put("lat1","1");
        info.put("lng1","1");
        info.put("lat2","1");
        info.put("lng2","1");

        when(diaryService.getDiaryListInMap(any())).thenReturn(diaryDtoList);

        mockMvc.perform(post("/api/diary/map").with(csrf())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(info)))
                .andExpect(status().isOk())
                .andDo(print());
    }

    @DisplayName("지도 범위 내의 일기 목록 조회 오류 테스트")
    @Test
    public void getDiaryInMapExceptionTest() throws Exception{
        Map<String,String> info = new HashMap<>();

        info.put("lat1","1");
        info.put("lng1","1");
        info.put("lat2","1");
        info.put("lng2","1");
        info.put("requestId","1");

        when(diaryService.getDiaryListInMap(any())).thenThrow(new RuntimeException());

        mockMvc.perform(post("/api/diary/map").with(csrf())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(info)))
                .andExpect(status().isInternalServerError())
                .andDo(print());
    }

    @DisplayName("좌표값으로 일기 조회 테스트")
    @Test
    public void getDiaryByLocationTest() throws Exception{
        when(diaryService.getDiaryByLocation(any())).thenReturn(diaryDto);
        Map<String,String> info = new HashMap<>();

        info.put("gardenId","1");
        info.put("x","10");
        info.put("y","10");
        info.put("z","10");

        mockMvc.perform(post("/api/diary/location").with(csrf())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(info)))
                .andExpect(status().isOk())
                .andDo(print());
    }

    @DisplayName("좌표값으로 일기 조회 오류 테스트")
    @Test
    public void getDiaryByLocationExceptionTest() throws Exception{
        when(diaryService.getDiaryByLocation(any())).thenThrow(new RuntimeException());

        Map<String,String> info = new HashMap<>();

        info.put("gardenId","1");
        info.put("x","10");
        info.put("y","10");
        info.put("z","10");

        mockMvc.perform(post("/api/diary/location").with(csrf())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(info)))
                .andExpect(status().isInternalServerError())
                .andDo(print());
    }

    @DisplayName("유저의 연 월 일기 조회")
    @Test
    public void getDiaryInMonthTest() throws Exception{
        List<DiaryDayDto> diaryDayDtoList = new ArrayList<>();
        List<DiaryDto> diaryDtoList = new ArrayList<>();

        diaryDtoList.add(diaryDto);
        DiaryDayDto diaryDayDto = DiaryDayDto.builder()
                .day("1").diaryList(diaryDtoList).build();

        diaryDayDtoList.add(diaryDayDto);

        when(diaryService.getDiaryInMonth(any(),any(),any())).thenReturn(diaryDayDtoList);

        mockMvc.perform(get("/api/diary?id={id}&year={year}&month={month}",1L,"2023","3"))
                .andExpect(status().isOk())
                .andDo(print());
    }

    @DisplayName("유저의 연 월 일기 조회")
    @Test
    public void getDiaryInMonthExceptionTest() throws Exception{
        when(diaryService.getDiaryInMonth(any(),any(),any())).thenThrow(new RuntimeException());

        mockMvc.perform(get("/api/diary?id={id}&year={year}&month={month}",1L,"2023","3"))
                .andExpect(status().isInternalServerError())
                .andDo(print());
    }
}
