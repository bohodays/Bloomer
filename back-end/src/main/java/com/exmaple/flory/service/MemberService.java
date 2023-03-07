package com.exmaple.flory.service;

import com.exmaple.flory.dto.member.MemberResponseDto;
import com.exmaple.flory.repository.MemberRepository;
import com.exmaple.flory.repository.RefreshTokenRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MemberService {
    private final MemberRepository memberRepository;
    private final RefreshTokenRepository refreshTokenRepository;

    public MemberResponseDto findMemberInfoByUserId(Long userId) {
        return memberRepository.findById(userId)
                .map(MemberResponseDto::of)
                .orElseThrow(() -> new RuntimeException("로그인 유저 정보가 없습니다."));
    }

    public MemberResponseDto findMemberInfoByEmail(String email) {
        return memberRepository.findByEmail(email)
                .map(MemberResponseDto::of)
                .orElseThrow(() -> new RuntimeException("유저 정보가 없습니다."));
    }

    @Transactional
    public void logout(String key){
        refreshTokenRepository.deleteByKey(key);
    }
}
