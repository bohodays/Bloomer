package com.exmaple.flory.dto.team;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class TeamMemberRequestDto {
    private Long teamId;
    private Long userId;

}
