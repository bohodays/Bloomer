package com.exmaple.flory.service;

import com.exmaple.flory.dto.member.MemberRequestDto;
import com.exmaple.flory.dto.member.MemberResponseDto;
import com.exmaple.flory.entity.Member;
import com.exmaple.flory.repository.MemberRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Spy;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.*;

@ExtendWith(SpringExtension.class)
class MemberServiceTest {

    @InjectMocks
    private MemberService memberService;

    @Mock
    private MemberRepository memberRepository;

    @Spy //Mock하지 않은 메소드 => 실제 메소드 동작
    private PasswordEncoder passwordEncoder;

    private final MemberResponseDto memberResponseDto = MemberResponseDto.builder().
            userId(1L).nickname("nickname").img("img").email("email").build();

    @BeforeEach
    void setUp() {
    }

    @DisplayName("회원 조회(토큰)")
    @Test
    void findMemberInfoByUserId() {
        //given
        Long userId = 1L;
        Member member = Member.builder()
                .userId(1L) .nickname("nickname").password(passwordEncoder.encode("password")) .img("img").email("email") .refreshToken("token").build();

        when(memberRepository.findById(anyLong())).thenReturn(Optional.ofNullable(member)); //mocking

        //when
        MemberResponseDto result = memberService.findMemberInfoByUserId(userId);

        //then
        assertEquals(result.getEmail(),memberResponseDto.getEmail());
    }

    @DisplayName("회원 조회(이메일)")
    @Test
    void findMemberInfoByEmail() {
        //given
        String email = "email";
        Member member = Member.builder()
                .userId(1L) .nickname("nickname").password(passwordEncoder.encode("password")) .img("img").email("email") .refreshToken("token").build();

        when(memberRepository.findByEmail(any())).thenReturn(Optional.ofNullable(member));

        //when
        MemberResponseDto result = memberService.findMemberInfoByEmail(email);

        //then
        assertEquals(result.getEmail(),memberResponseDto.getEmail());
    }

    @DisplayName("로그아웃")
    @Test
    void logout() {
        //given
        Long userId = 1L;
        Member member = Member.builder()
                .userId(1L) .nickname("nickname").password(passwordEncoder.encode("password")) .img("img").email("email") .refreshToken("token").build();

        when(memberRepository.findById(anyLong())).thenReturn(Optional.ofNullable(member));

        member.updateToken(null);
//        when(memberRepository.save(any())).thenReturn(Optional.ofNullable(member));

        //when
        memberService.logout(userId);

        //then
        verify(memberRepository, times(1)).findById(anyLong());
        verify(memberRepository, times(1)).save(any());
    }

    @DisplayName("회원 정보 수정")
    @Test
    void updateMember() {
        //given
        MemberRequestDto memberRequestDto = MemberRequestDto.builder()
                .nickname("rename").password("password").img("img").build();

        Member member = Member.builder()
                .userId(1L) .nickname("nickname").password(passwordEncoder.encode("password")) .img("img").email("email") .refreshToken("token").build();

        when(memberRepository.findByEmail(anyString())).thenReturn(Optional.ofNullable(member));
        member.updateMember(memberRequestDto.getNickname(), memberRequestDto.getImg(), memberRequestDto.getPassword(), passwordEncoder);
        when(memberRepository.save(any())).thenReturn(Optional.ofNullable(member));

        //when
        MemberResponseDto result = memberService.updateMember(memberRequestDto);

        //then
        assertEquals(result.getNickname(),memberResponseDto.getNickname());
    }

    @DisplayName("회원 탈퇴")
    @Test
    void deleteMember() {
    }
}