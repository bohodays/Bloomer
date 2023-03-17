package com.exmaple.flory.service;

import com.exmaple.flory.dto.member.MemberRequestDto;
import com.exmaple.flory.dto.member.MemberResponseDto;
import com.exmaple.flory.entity.Member;
import com.exmaple.flory.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Slf4j
@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final S3Uploader s3Uploader;

    @Transactional(readOnly = true)
    public MemberResponseDto findMemberInfoByUserId(Long userId) {
        return memberRepository.findById(userId)
                .map(MemberResponseDto::of)
                .orElseThrow(() -> new RuntimeException("로그인 유저 정보가 없습니다."));
    }

    @Transactional(readOnly = true)
    public MemberResponseDto findMemberInfoByEmail(String email) {
        return memberRepository.findByEmail(email)
                .map(MemberResponseDto::of)
                .orElseThrow(() -> new RuntimeException("유저 정보가 없습니다."));
    }

    @Transactional
    public void logout(Long userId){
        Member member = memberRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("유저 정보가 없습니다."));
        member.updateToken(null);
        memberRepository.save(member); //토큰 제거
    }

    @Transactional
    public MemberResponseDto updateMember(MemberRequestDto memberRequestDto, MultipartFile multipartFile) throws IOException {
        Member member = memberRepository.findByEmail(memberRequestDto.getEmail())
                .orElseThrow(() -> new RuntimeException("유저 정보가 없습니다."));
        if(multipartFile !=null) {
            String storedFileName = s3Uploader.upload(multipartFile);
            member.updateImg(storedFileName);
        }

        member.updateMember(memberRequestDto.getNickname(), memberRequestDto.getPassword(), passwordEncoder);
        return MemberResponseDto.of(memberRepository.save(member));
    }

    @Transactional
    public void deleteMember(String email){
        memberRepository.delete(
                memberRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("유저 정보가 없습니다."))
        );
    }
}
