package com.exmaple.flory.dto.garden;

import com.exmaple.flory.dto.member.MemberResponseDto;
import com.exmaple.flory.entity.Music;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class GardenDiaryDto {
    private Long id;

    private LocalDateTime deadLine;

    private MemberResponseDto member;

    private Music music;

}
