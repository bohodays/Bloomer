package com.exmaple.flory.controller;

import com.exmaple.flory.dto.member.MemberRequestDto;
import com.exmaple.flory.dto.member.MemberResponseDto;
import com.exmaple.flory.exception.error.ErrorCode;
import com.exmaple.flory.response.ErrorResponse;
import com.exmaple.flory.response.SuccessResponse;
import com.exmaple.flory.service.MemberService;
import com.exmaple.flory.util.ResponseHandler;
import com.exmaple.flory.util.SecurityUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
@PreAuthorize("isAuthenticated()") //로그인이 된 상태에서만 사용가능하다.
public class MemberController {
    private final MemberService memberService;

    @GetMapping("/me")
    public ResponseEntity<?> findMemberInfoById() {
        try{
            MemberResponseDto memberResponseDto = memberService.findMemberInfoByUserId(SecurityUtil.getCurrentMemberId());
            return new ResponseEntity<>(new SuccessResponse(memberResponseDto), HttpStatus.OK);
        }catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INTERNAL_SERVER_ERROR),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{email}")
    public ResponseEntity<?> findMemberInfoByEmail(@PathVariable String email) {
        try{
            MemberResponseDto memberResponseDto = memberService.findMemberInfoByEmail(email);
            return new ResponseEntity<>(new SuccessResponse(memberResponseDto), HttpStatus.OK);
        }catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INTERNAL_SERVER_ERROR),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/logout")
    public ResponseEntity<?> logout() {
        try{
            memberService.logout(SecurityUtil.getCurrentMemberId()); // SecurityContext에 저장된 id값을 가져온다.
            return new ResponseEntity<>(new SuccessResponse("로그아웃"), HttpStatus.OK);
        }catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INTERNAL_SERVER_ERROR),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping
    public ResponseEntity<?> updateMember(@RequestPart MemberRequestDto memberRequestDto, @RequestPart(value = "img", required = false) final MultipartFile multipartFile){
        try{
            MemberResponseDto memberResponseDto = memberService.updateMember(memberRequestDto, multipartFile);
            return new ResponseEntity<>(new SuccessResponse(memberResponseDto),HttpStatus.OK);
        }catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INTERNAL_SERVER_ERROR),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{email}")
    public ResponseEntity<?> deleteMember(@PathVariable String email){ // 회원 탈퇴
        try{
            memberService.deleteMember(email);
            return new ResponseEntity<>(new SuccessResponse("멤버 삭제 되었습니다."),HttpStatus.OK);
        }catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INTERNAL_SERVER_ERROR),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
