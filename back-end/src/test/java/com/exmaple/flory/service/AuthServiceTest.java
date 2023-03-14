package com.exmaple.flory.service;

import antlr.Token;
import com.exmaple.flory.dto.member.LoginDto;
import com.exmaple.flory.dto.member.MemberResponseDto;
import com.exmaple.flory.dto.member.SignUpRequestDto;
import com.exmaple.flory.dto.member.TokenDto;
import com.exmaple.flory.entity.Member;
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

import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(SpringExtension.class)
class AuthServiceTest {

    @InjectMocks
    AuthService authService;

    @Mock
    private MemberRepository memberRepository;

    @Spy
    private PasswordEncoder passwordEncoder;


    @DisplayName("회원가입")
    @Test
    void signup() {
        //given
        SignUpRequestDto signUpRequestDto = SignUpRequestDto.builder()
                .nickname("nickname").password("password").email("email").build();

        Member member = signUpRequestDto.toMember(passwordEncoder);

        when(memberRepository.existsByEmail(any())).thenReturn(false);
        when(memberRepository.save(any())).thenReturn(member);

        //when
        MemberResponseDto result = authService.signup(signUpRequestDto);

        //then
        assertThat(result.getEmail()).isEqualTo(signUpRequestDto.getEmail());

    }

    @DisplayName("로그인")
    @Test
    void login() {
//        //given
//        LoginDto loginDto = LoginDto.builder()
//                .email("email").password("password").build();
//
//        Member member = Member.builder()
//                .userId(1L) .nickname("nickname").password(passwordEncoder.encode("password")) .img("img").email("email") .refreshToken("token").build();
//
//        when(memberRepository.findByEmail(any())).thenReturn(Optional.ofNullable(member));
//        member.updateToken("newToken");
//        when(memberRepository.save(any())).thenReturn(member);
//
//        //when
//        TokenDto tokenDto = authService.login(loginDto);
//
//        //then
//        assertThat(tokenDto.getRefreshToken()).isEqualTo(member.getRefreshToken());
    }

    @Test
    void reissue() {
    }

    @Test
    void checkEmail() {
    }
}