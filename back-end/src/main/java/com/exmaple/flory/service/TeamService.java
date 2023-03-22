package com.exmaple.flory.service;

import com.exmaple.flory.dto.member.MemberResponseDto;
import com.exmaple.flory.dto.team.*;
import com.exmaple.flory.entity.Team;
import com.exmaple.flory.entity.Member;
import com.exmaple.flory.entity.UserTeam;
import com.exmaple.flory.exception.CustomException;
import com.exmaple.flory.exception.error.ErrorCode;
import com.exmaple.flory.repository.QTeamRepository;
import com.exmaple.flory.repository.TeamRepository;
import com.exmaple.flory.repository.MemberRepository;
import com.exmaple.flory.repository.UserTeamRepository;
import com.querydsl.core.Tuple;
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
                .orElseThrow(() -> new CustomException(ErrorCode.INVALID_TEAM));
    }

    @Transactional(readOnly = true)
    public List<TeamDto> getAllTeam(Long userId){

        Member member = memberRepository.findById(userId)
                .orElseThrow(() -> new CustomException(ErrorCode.NO_USER));

        List<TeamDto> teamDtoList = teamRepository.getAllTeam(userId);

        return teamDtoList;
    }

    @Transactional
    public TeamDto insertTeam(TeamInsertRequestDto teamInsertRequestDto){

        Team team = teamRepository.save(teamInsertRequestDto.toGroup());
        List<MemberResponseDto> memberList = new ArrayList<>();
        Member member = memberRepository.findById(teamInsertRequestDto.getHostId())
                .orElseThrow(() -> new CustomException(ErrorCode.NO_USER));

        UserTeam userTeam = UserTeam.builder()
                .tid(team)
                .uid(member)
                .status(1)
                .manager(0) //관리자
                .build();
        
        memberList.add(MemberResponseDto.of(userTeamRepository.save(userTeam).getUid()));

//        return teamRepository.findById(team.getTeamId())
//                .map(TeamDto::of)
//                .orElseThrow(() -> new RuntimeException("해당 그룹 정보가 없습니다."));
        return TeamDto.toTeam(team,memberList);
    }

    @Transactional
    public void deleteTeam(Long teamId){
        teamRepository.delete(
                teamRepository.findById(teamId).orElseThrow(() -> new CustomException(ErrorCode.INVALID_TEAM))
        );
    }

    @Transactional
    public TeamDto updateTeam(TeamUpdateRequestDto teamUpdateRequestDto){
        Team team = teamRepository.findById(teamUpdateRequestDto.getTeamId())
                .orElseThrow(() -> new CustomException(ErrorCode.INVALID_TEAM));

        team.updateTeam(teamUpdateRequestDto.getName(), teamUpdateRequestDto.getInfo(), teamUpdateRequestDto.getOpen());
        return TeamDto.of(teamRepository.save(team));
    }

    @Transactional(readOnly = true)
    public List<TeamDto> getUserTeam(Long userId){

        Member member = memberRepository.findById(userId)
                .orElseThrow(() -> new CustomException(ErrorCode.NO_USER));

        List<UserTeam> userTeamList = userTeamRepository.findAllByUidAndStatus(member, 1); //승인된 내용만 조회
        List<TeamDto> teamDtoList = new ArrayList<>();
        for(UserTeam team : userTeamList){
            teamDtoList.add(TeamDto.of(team.getTid()));
        }
        return teamDtoList;
    }

    @Transactional
    public TeamDto insertTeamMember(TeamMemberRequestDto teamMemberRequestDto){
        Team team = teamRepository.findById(teamMemberRequestDto.getTeamId())
                .orElseThrow(() -> new CustomException(ErrorCode.INVALID_TEAM));

        Member member = memberRepository.findById(teamMemberRequestDto.getUserId())
                .orElseThrow(() -> new CustomException(ErrorCode.NO_USER));

        if(userTeamRepository.existsByUidAndTid(member,team)){
            throw new CustomException(ErrorCode.TEAM_DUPLICATION);
        }

        UserTeam userTeam = UserTeam.builder()
                .tid(team)
                .uid(member)
                .status(0) //가입 대기
                .message(teamMemberRequestDto.getMessage())
                .manager(1) //멤버로
                .build();

        return TeamDto.of(userTeamRepository.save(userTeam).getTid());
    }

    @Transactional
    public TeamDto approveTeamMember(TeamApproveRequestDto teamApproveRequestDto){
        Team team = teamRepository.findById(teamApproveRequestDto.getTeamId())
                .orElseThrow(() -> new CustomException(ErrorCode.INVALID_TEAM));

        Member member = memberRepository.findById(teamApproveRequestDto.getUserId())
                .orElseThrow(() -> new CustomException(ErrorCode.NO_USER));

        UserTeam userTeam = userTeamRepository.findByUidAndTid(member, team)
                .orElseThrow(() -> new CustomException(ErrorCode.INVALID_APPROVE));

        userTeam.updateUserTeam(1); //가입 승인 상태로
        return TeamDto.of(userTeamRepository.save(userTeam).getTid());
    }

    @Transactional
    public int deleteTeamMember(TeamMemberRequestDto teamMemberRequestDto){
        Team team = teamRepository.findById(teamMemberRequestDto.getTeamId())
                .orElseThrow(() -> new CustomException(ErrorCode.INVALID_TEAM));

        Member member = memberRepository.findById(teamMemberRequestDto.getUserId())
                .orElseThrow(() -> new CustomException(ErrorCode.NO_USER));

        UserTeam userTeam = userTeamRepository.findByUidAndTid(member, team)
                .orElseThrow(() -> new CustomException(ErrorCode.INVALID_APPROVE));

        userTeamRepository.deleteById(userTeam.getUserTeamId());
        return 1;
    }
}
