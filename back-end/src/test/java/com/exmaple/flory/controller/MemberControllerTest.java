package com.exmaple.flory.controller;

import com.exmaple.flory.service.MemberService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

@WebMvcTest(controllers = MemberController.class)
class MemberControllerTest {

    @MockBean
    private MemberService memberService;

    @Autowired
    private MockMvc mockMvc;

    @DisplayName("")
    @Test
    void findMemberInfoById() {
    }

    @DisplayName("")
    @Test
    void findMemberInfoByEmail() {
    }

    @DisplayName("")
    @Test
    void logout() {
    }

    @DisplayName("")
    @Test
    void updateMember() {
    }

    @DisplayName("")
    @Test
    void deleteMember() {
    }
}