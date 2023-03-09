package com.exmaple.flory.controller;

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
            .id(1L).content("content").imgSrc("imgSrc").lat("lat").lng("lng").publicStatus("전체공개").x("x").y("y").z("z")
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

    @DisplayName("좌표값으로 일기 조회 테스트")
    @Test
    public void getDiaryByLocationTest() throws Exception{
        when(diaryService.getDiaryByLocation(any(),any(),any())).thenReturn(diaryDto);

        mockMvc.perform(get("/api/diary?x={x}&y={y}&z={z}",10,10,10))
                .andExpect(status().isOk())
                .andDo(print());
    }

    @DisplayName("좌표값으로 일기 조회 오류 테스트")
    @Test
    public void getDiaryByLocationExceptionTest() throws Exception{
        when(diaryService.getDiaryByLocation(any(),any(),any())).thenThrow(new RuntimeException());

        mockMvc.perform(get("/api/diary?x={x}&y={y}&z={z}",10,10,10))
                .andExpect(status().isInternalServerError())
                .andDo(print());
    }
}
