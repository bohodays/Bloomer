package com.exmaple.flory.service;

import com.exmaple.flory.dto.member.MemberRequestDto;
import com.exmaple.flory.dto.member.MemberResponseDto;
import com.exmaple.flory.entity.Member;
import com.exmaple.flory.repository.MemberRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(SpringExtension.class)
class MemberServiceTest {

    MemberService memberService;

    @MockBean
    MemberRepository memberRepository;
    @MockBean
    PasswordEncoder passwordEncoder;

    private final MemberRequestDto memberRequestDto = MemberRequestDto.builder()
            .nickname("nickname").password("password").img("img").build();
    private final MemberResponseDto memberResponseDto = MemberResponseDto.builder().
            userId(1L).nickname("nickname").img("img").email("email").build();

    @BeforeEach
    void setUp() {
        memberService = new MemberService(memberRepository,passwordEncoder);
    }

    @DisplayName("회원 조회(토큰)")
    @Test
    void findMemberInfoByUserId() {
        //given
        // 모든 타입 매개변수를 받을 경우 member를 돌려준다.
        when(memberRepository.save(any())).thenReturn(memberRequestDto.toMember(passwordEncoder));
        //when
        //then
    }

    @DisplayName("회원 조회(이메일)")
    @Test
    void findMemberInfoByEmail() {
    }

    @DisplayName("로그아웃")
    @Test
    void logout() {
    }

    @DisplayName("회원 정보 수정")
    @Test
    void updateMember() {
    }

    @DisplayName("회원 탈퇴")
    @Test
    void deleteMember() {
    }
}