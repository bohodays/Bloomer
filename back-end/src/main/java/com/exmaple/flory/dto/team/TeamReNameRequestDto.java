package com.exmaple.flory.dto.team;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class TeamReNameRequestDto {
    private Long teamId;
    private String name; //그룹 이름
}
