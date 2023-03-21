package com.exmaple.flory.dto.comment;

import com.exmaple.flory.dto.member.MemberResponseDto;
import lombok.*;
import lombok.extern.slf4j.Slf4j;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
@Slf4j
public class CommentListDto {

    private Long id;

    private String content;

    private Date createdTime;

    private MemberResponseDto member;
}
