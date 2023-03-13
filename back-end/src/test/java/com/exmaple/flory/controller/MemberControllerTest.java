package com.exmaple.flory.controller;

import com.exmaple.flory.dto.member.MemberResponseDto;
import com.exmaple.flory.entity.Authority;
import com.exmaple.flory.entity.Member;
import com.exmaple.flory.service.MemberService;
import com.exmaple.flory.util.SecurityUtil;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Spy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Collections;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(controllers = MemberController.class)
class MemberControllerTest {

    @MockBean
    private MemberService memberService;

    @Autowired
    private MockMvc mockMvc;

    private final MemberResponseDto memberResponseDto = MemberResponseDto.builder()
            .userId(1L).nickname("nickname").img("img").email("email").build();
    @DisplayName("회원 조회(토큰)")
    @Test
    void findMemberInfoById() throws Exception{
        //given
        when(memberService.findMemberInfoByUserId(any())).thenReturn(memberResponseDto);

        MvcResult mvcResult = mockMvc.perform(get("/api/user/me"))
                .andExpect(status().isOk())
                .andReturn();

        MemberResponseDto response = new ObjectMapper().readValue(mvcResult.getResponse().getContentAsString(), MemberResponseDto.class);

        assertThat(response.getEmail()).isEqualTo(memberResponseDto.getEmail());
    }

    @DisplayName("회원 조회(이메일)")
    @Test
    void findMemberInfoByEmail() {
    }

    @DisplayName("로그아웃")
    @Test
    void logout() {
    }

    @DisplayName("회원 수정")
    @Test
    void updateMember() {
    }

    @DisplayName("회원 탈퇴")
    @Test
    void deleteMember() {
    }
}