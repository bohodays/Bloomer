package com.exmaple.flory.dto.team;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TeamReNameRequestDto {
    private Long teamId;
    private String name; //그룹 이름
}
