package com.exmaple.flory.dto.team;

import com.exmaple.flory.dto.member.MemberResponseDto;
import com.exmaple.flory.entity.Member;
import com.exmaple.flory.entity.Team;
import com.exmaple.flory.entity.UserTeam;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

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
    private Boolean open;
    private List<MemberResponseDto> userTeamList;
    private LocalDateTime createdDate;
    private Integer status;

    public static TeamDto of(Team team, Member member) {
        List<MemberResponseDto> memberList = new ArrayList<>();
        int status = -1; //신청도 안한 상태

        for(UserTeam userTeam : team.getUserTeamList()){
            if(userTeam.getStatus() == 1){ // 승인된 사람들만
                memberList.add(MemberResponseDto.of(userTeam.getUid()));
            }

            if(userTeam.getUid().getUserId().equals(member.getUserId())){
                status = userTeam.getStatus();
            }
        }
        return new TeamDto(team.getTeamId(), team.getName(), team.getInfo(), team.getOpen(), memberList, team.getCreatedDate(), status);
    }
    public static TeamDto of(Team team) {
        List<MemberResponseDto> memberList = new ArrayList<>();

        for(UserTeam userTeam : team.getUserTeamList()){
            if(userTeam.getStatus() == 1){ // 승인된 사람들만
                memberList.add(MemberResponseDto.of(userTeam.getUid()));
            }
        }
        return new TeamDto(team.getTeamId(), team.getName(), team.getInfo(), team.getOpen(), memberList, team.getCreatedDate(), 1);
    }

    public static TeamDto toTeam(Team team, List<MemberResponseDto> memberList){
        return new TeamDto(team.getTeamId(), team.getName(), team.getInfo(), team.getOpen(), memberList, team.getCreatedDate(),1);
    }

}
