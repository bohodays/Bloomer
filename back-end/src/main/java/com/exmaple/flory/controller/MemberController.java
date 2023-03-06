package com.exmaple.flory.controller;

import com.exmaple.flory.dto.member.MemberResponseDto;
import com.exmaple.flory.service.MemberService;
import com.exmaple.flory.util.ResponseHandler;
import com.exmaple.flory.util.SecurityUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class MemberController {
    private final MemberService memberService;

    @GetMapping("/me")
    public ResponseEntity findMemberInfoById() {
        MemberResponseDto memberResponseDto = memberService.findMemberInfoByUserId(SecurityUtil.getCurrentMemberId());
        return ResponseHandler.generateResponse("회원정보가 조회되었습니다.", HttpStatus.OK,"member",memberResponseDto);
    }

    @GetMapping("/{email}")
    public ResponseEntity findMemberInfoByEmail(@PathVariable String email) {
        MemberResponseDto memberResponseDto = memberService.findMemberInfoByEmail(email);
        return ResponseHandler.generateResponse("회원정보가 조회되었습니다.", HttpStatus.OK,"member",memberResponseDto);
    }
}
