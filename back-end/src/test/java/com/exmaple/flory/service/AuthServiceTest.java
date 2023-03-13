package com.exmaple.flory.service;

import com.exmaple.flory.jwt.TokenProvider;
import com.exmaple.flory.repository.MemberRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Spy;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(SpringExtension.class)
class AuthServiceTest {

    @InjectMocks
    AuthService authService;

    @Spy
    private AuthenticationManagerBuilder authenticationManagerBuilder;

    @Mock
    private MemberRepository memberRepository;

    @Spy
    private PasswordEncoder passwordEncoder;

    @Spy
    private TokenProvider tokenProvider;

    @DisplayName("회원가입")
    @Test
    void signup() {
    }

    @Test
    void login() {
    }

    @Test
    void reissue() {
    }

    @Test
    void checkEmail() {
    }
}