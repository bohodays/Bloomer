package com.exmaple.flory.service;

import com.exmaple.flory.dto.member.*;
import com.exmaple.flory.entity.Member;
import com.exmaple.flory.jwt.TokenProvider;
import com.exmaple.flory.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final TokenProvider tokenProvider;

    @Transactional
    public MemberResponseDto signup(MemberRequestDto memberRequestDto) {
        if (memberRepository.existsByEmail(memberRequestDto.getEmail())) {
            throw new RuntimeException("이미 가입되어 있는 유저입니다");
        }

        Member member = memberRequestDto.toMember(passwordEncoder);
        return MemberResponseDto.of(memberRepository.save(member));
    }

    @Transactional
    public TokenDto login(LoginDto LoginDto) {
        // 1. Login ID/PW 를 기반으로 AuthenticationToken 생성
        UsernamePasswordAuthenticationToken authenticationToken = LoginDto.toAuthentication();

        // 2. 실제로 검증 (사용자 비밀번호 체크) 이 이루어지는 부분
        // authenticate 메서드가 실행이 될 때 CustomUserDetailsService 에서 만들었던 loadUserByUsername 메서드가 실행됨
        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);

        // 3. 인증 정보를 기반으로 JWT 토큰 생성
        TokenDto tokenDto = tokenProvider.createTokenDto(authentication);

        // 4. RefreshToken 저장
        Member member = memberRepository.findByEmail(LoginDto.getEmail()).get();
        member.updateToken(tokenDto.getRefreshToken());

        memberRepository.save(member); // 토큰 업데이트

        // 5. 토큰 발급
        return tokenDto;
    }

    @Transactional
    public TokenDto reissue(TokenRequestDto tokenRequestDto) {
        // 1. Refresh Token 검증
        if (!tokenProvider.validateToken(tokenRequestDto.getRefreshToken())) {
            throw new RuntimeException("Refresh Token 이 유효하지 않습니다.");
        }

        // 2. Access Token 에서 Member ID 가져오기
        Authentication authentication = tokenProvider.getAuthentication(tokenRequestDto.getAccessToken());

        // 3. 저장소에서 Member ID 를 기반으로 Refresh Token 값 가져옴
        Member member = memberRepository.findById(Integer.parseInt(authentication.getName())).get();
//                .orElseThrow(() -> new RuntimeException("로그아웃 된 사용자입니다."));

        if(member.getRefreshToken() == null){
            throw new RuntimeException("로그아웃 된 사용자입니다.");
        }
        // 4. Refresh Token 일치하는지 검사
        if (!member.getRefreshToken().equals(tokenRequestDto.getRefreshToken())) {
            throw new RuntimeException("토큰의 유저 정보가 일치하지 않습니다.");
        }

        // 5. 새로운 토큰 생성
        TokenDto tokenDto = tokenProvider.createTokenDto(authentication);

        // 6. 저장소 정보 업데이트
        Member newRefreshToken = member.updateToken(tokenDto.getRefreshToken());
        memberRepository.save(newRefreshToken);

        // 토큰 발급
        return tokenDto;
    }

    public boolean checkEmail(String email) {
        return memberRepository.existsByEmail(email);
    }
}
