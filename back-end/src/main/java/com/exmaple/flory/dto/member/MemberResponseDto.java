package com.exmaple.flory.dto.member;

import com.exmaple.flory.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class MemberResponseDto {
    private String nickname;
    private String img;
    private String email;

    public static MemberResponseDto of(Member member) {
        return new MemberResponseDto(member.getNickname(), member.getImg(), member.getEmail());
    }
}
