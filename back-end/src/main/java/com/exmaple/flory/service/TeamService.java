package com.exmaple.flory.service;

import com.exmaple.flory.dto.member.MemberResponseDto;
import com.exmaple.flory.dto.team.TeamDto;
import com.exmaple.flory.dto.team.TeamInsertRequestDto;
import com.exmaple.flory.dto.team.TeamMemberRequestDto;
import com.exmaple.flory.dto.team.TeamReNameRequestDto;
import com.exmaple.flory.entity.Team;
import com.exmaple.flory.entity.Member;
import com.exmaple.flory.entity.UserTeam;
import com.exmaple.flory.repository.TeamRepository;
import com.exmaple.flory.repository.MemberRepository;
import com.exmaple.flory.repository.UserTeamRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;


@Slf4j
@Service
@RequiredArgsConstructor
public class TeamService {

    private final TeamRepository teamRepository;
    private final MemberRepository memberRepository;
    private final UserTeamRepository userTeamRepository;

    @Transactional(readOnly = true)
    public TeamDto getTeam(Long teamId) {
        return teamRepository.findById(teamId)
                .map(TeamDto::of)
                .orElseThrow(() -> new RuntimeException("해당 그룹 정보가 없습니다."));
    }

    @Transactional
    public TeamDto insertTeam(TeamInsertRequestDto teamInsertRequestDto){

        Team team = teamRepository.save(teamInsertRequestDto.toGroup());

        List<MemberResponseDto> memberList = new ArrayList<>();
        for(Long memberId : teamInsertRequestDto.getParticipant()){
            Member member = memberRepository.findById(memberId)
                    .orElseThrow(() -> new RuntimeException("멤버 정보가 없습니다."));

            UserTeam userTeam = UserTeam.builder()
                    .tid(team)
                    .uid(member)
                    .build();
            memberList.add(MemberResponseDto.of(userTeamRepository.save(userTeam).getUid()));
        }

//        return teamRepository.findById(team.getTeamId())
//                .map(TeamDto::of)
//                .orElseThrow(() -> new RuntimeException("해당 그룹 정보가 없습니다."));
        return TeamDto.toTeam(team,memberList);
    }

    @Transactional
    public void deleteTeam(Long teamId){
        teamRepository.delete(
                teamRepository.findById(teamId).orElseThrow(() -> new RuntimeException("해당 그룹이 존재하지 않습니다."))
        );
    }

    @Transactional
    public TeamDto updateTeamName(TeamReNameRequestDto teamReNameRequestDto){
        Team team = teamRepository.findById(teamReNameRequestDto.getTeamId())
                .orElseThrow(() -> new RuntimeException("해당 그룹 정보가 없습니다."));

        team.updateName(teamReNameRequestDto.getName());
        return TeamDto.of(teamRepository.save(team));
    }

    @Transactional(readOnly = true)
    public List<TeamDto> getUserTeam(Long userId){

        Member member = memberRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("멤버 정보가 없습니다."));

        List<UserTeam> userTeamList = userTeamRepository.findAllByUid(member);
        List<TeamDto> teamDtoList = new ArrayList<>();
        for(UserTeam team : userTeamList){
            teamDtoList.add(TeamDto.of(team.getTid()));
        }
        return teamDtoList;
    }

    @Transactional
    public TeamDto insertTeamMember(TeamMemberRequestDto teamMemberRequestDto){
        Team team = teamRepository.findById(teamMemberRequestDto.getTeamId())
                .orElseThrow(() -> new RuntimeException("그룹이 존재하지 않습니다."));

        Member member = memberRepository.findById(teamMemberRequestDto.getUserId())
                .orElseThrow(() -> new RuntimeException("멤버가 존재하지 않습니다."));

        if(userTeamRepository.existsByUidAndTid(member,team)){
            throw new RuntimeException("이미 그룹에 멤버가 존재합니다.");
        }

        UserTeam userTeam = UserTeam.builder()
                .tid(team)
                .uid(member)
                .build();

        return TeamDto.of(userTeamRepository.save(userTeam).getTid());
    }

    @Transactional
    public int deleteTeamMember(TeamMemberRequestDto teamMemberRequestDto){
        Team team = teamRepository.findById(teamMemberRequestDto.getTeamId())
                .orElseThrow(() -> new RuntimeException("그룹이 존재하지 않습니다."));

        Member member = memberRepository.findById(teamMemberRequestDto.getUserId())
                .orElseThrow(() -> new RuntimeException("멤버가 존재하지 않습니다."));

        UserTeam userTeam = userTeamRepository.findByUidAndTid(member, team)
                .orElseThrow(() -> new RuntimeException("해당 그룹에 해당 멤버가 존재하지 않습니다."));

        userTeamRepository.deleteById(userTeam.getUserTeamId());
        return 1;
    }
}
