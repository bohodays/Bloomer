package com.exmaple.flory.dto.team;

import com.exmaple.flory.dto.member.MemberResponseDto;
import com.exmaple.flory.entity.UserTeam;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class TeamQueryDto {
    private Long teamId;
    private String name; //그룹 이름
    private String info;
    private Boolean open;
    private List<UserTeam> userTeamList;
    private LocalDateTime createdDate;
    private Integer status;
}
