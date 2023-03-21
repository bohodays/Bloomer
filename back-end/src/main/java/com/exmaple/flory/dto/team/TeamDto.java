package com.exmaple.flory.dto.team;

import com.exmaple.flory.dto.member.MemberResponseDto;
import com.exmaple.flory.entity.Member;
import com.exmaple.flory.entity.Team;
import com.exmaple.flory.entity.UserTeam;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class TeamDto {
    private Long teamId;
    private String name; //그룹 이름
    private String info;
    private boolean isPrivate;
    private List<MemberResponseDto> userGroupList;
    private LocalDateTime createdDate;

    public static TeamDto of(Team team) {
        List<MemberResponseDto> memberList = new ArrayList<>();

        for(UserTeam userTeam : team.getUserTeamList()){
            memberList.add(MemberResponseDto.of(userTeam.getUid()));
        }
        return new TeamDto(team.getTeamId(), team.getName(), team.getInfo(), team.isPrivate(), memberList, team.getCreatedDate());
    }

    public static TeamDto toTeam(Team team, List<MemberResponseDto> memberList){
        return new TeamDto(team.getTeamId(), team.getName(), team.getInfo(), team.isPrivate(), memberList, team.getCreatedDate());
    }

}
