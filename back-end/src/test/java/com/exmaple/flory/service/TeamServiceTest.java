package com.exmaple.flory.service;

import com.exmaple.flory.dto.member.MemberResponseDto;
import com.exmaple.flory.dto.team.TeamDto;
import com.exmaple.flory.dto.team.TeamInsertRequestDto;
import com.exmaple.flory.dto.team.TeamMemberRequestDto;
import com.exmaple.flory.dto.team.TeamReNameRequestDto;
import com.exmaple.flory.entity.Member;
import com.exmaple.flory.entity.Team;
import com.exmaple.flory.entity.UserTeam;
import com.exmaple.flory.repository.MemberRepository;
import com.exmaple.flory.repository.TeamRepository;
import com.exmaple.flory.repository.UserTeamRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Spy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import javax.swing.text.html.Option;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;


@ExtendWith(SpringExtension.class)
class TeamServiceTest {

    @InjectMocks
    TeamService teamService;

    @Mock
    private TeamRepository teamRepository;

    @Mock
    private MemberRepository memberRepository;

    @Mock
    private UserTeamRepository userTeamRepository;

    @Spy
    private PasswordEncoder passwordEncoder;

    @DisplayName("팀 정보 가져오기")
    @Test
    void getTeam() {
        //given
        Long teamId = 1L;
        Team team = Team.builder().teamId(1L).name("name").build();

        when(teamRepository.findById(any())).thenReturn(Optional.ofNullable(team));

        //when
        TeamDto result = teamService.getTeam(teamId);

        //then
        assertThat(result.getName()).isEqualTo(team.getName());
    }

    @DisplayName("팀 추가")
    @Test
    void insertTeam() {
        //given
        List<Long> participant = new ArrayList<>();
        participant.add(1L);

        TeamInsertRequestDto teamInsertRequestDto = TeamInsertRequestDto.builder()
                .name("name").participant(participant).build();

        Team team = Team.builder().teamId(1L).name("name").build();
        Member member = Member.builder()
                .userId(1L) .nickname("nickname").password(passwordEncoder.encode("password")) .img("img").email("email") .refreshToken("token").build();
        UserTeam userTeam = UserTeam.builder().userTeamId(1L).tid(team).uid(member).build();
        List<MemberResponseDto> userTeamList = new ArrayList<>();
        MemberResponseDto memberResponseDto = MemberResponseDto.of(member);
        userTeamList.add(memberResponseDto);

        TeamDto teamDto = TeamDto.toTeam(team, userTeamList);

        when(teamRepository.save(any())).thenReturn(team);
        when(memberRepository.findById(any())).thenReturn(Optional.ofNullable(member));
        when(userTeamRepository.save(any())).thenReturn(userTeam);

        //when
        TeamDto result = teamService.insertTeam(teamInsertRequestDto);

        assertThat(result.getUserGroupList().size()).isEqualTo(teamDto.getUserGroupList().size());
        assertThat(result.getName()).isEqualTo(teamDto.getName());
    }

    @DisplayName("팀 삭제")
    @Test
    void deleteTeam() {
        //given
        Long teamId = 1L;
        Team team = Team.builder().teamId(1L).name("name").build();

        when(teamRepository.findById(any())).thenReturn(Optional.ofNullable(team));

        //when
        teamService.deleteTeam(teamId);

        //then
        verify(teamRepository, times(1)).findById(any());
        verify(teamRepository, times(1)).delete(any());
    }

    @DisplayName("팀 이름 변경")
    @Test
    void updateTeamName() {
        //given
        TeamReNameRequestDto teamReNameRequestDto = TeamReNameRequestDto.builder().teamId(1L).name("rename").build();
        Team team = Team.builder().teamId(1L).name("name").build();

        when(teamRepository.findById(any())).thenReturn(Optional.ofNullable(team));
        team.updateName(teamReNameRequestDto.getName());
        when(teamRepository.save(any())).thenReturn(team);

        //when
        TeamDto result = teamService.updateTeamName(teamReNameRequestDto);

        //then
        assertThat(result.getName()).isEqualTo(team.getName());
    }

    @DisplayName("해당 유저가 속한 팀 목록 가져오기")
    @Test
    void getUserTeam() {
        //given
        Long userId = 1L;
        Member member = Member.builder()
                .userId(1L) .nickname("nickname").password(passwordEncoder.encode("password")) .img("img").email("email") .refreshToken("token").build();

        Team team = Team.builder().teamId(1L).name("name").build();
        Team team2 = Team.builder().teamId(2L).name("second").build();
        UserTeam userTeam = UserTeam.builder().userTeamId(1L).tid(team).uid(member).build();
        UserTeam userTeam2 = UserTeam.builder().userTeamId(2L).tid(team2).uid(member).build();

        List<UserTeam> userTeamList = new ArrayList<>();
        userTeamList.add(userTeam);
        userTeamList.add(userTeam2);

        List<TeamDto> teamDtoList = new ArrayList<>();
        teamDtoList.add(TeamDto.of(team));
        teamDtoList.add(TeamDto.of(team2));

        when(memberRepository.findById(any())).thenReturn(Optional.ofNullable(member));
        when(userTeamRepository.findAllByUid(any())).thenReturn(userTeamList);

        //when
        List<TeamDto> result = teamService.getUserTeam(userId);

        //then
        assertThat(result.size()).isEqualTo(teamDtoList.size());
    }

    @DisplayName("팀 멤버 추가")
    @Test
    void insertTeamMember() {
        //given
        TeamMemberRequestDto teamMemberRequestDto = TeamMemberRequestDto.builder()
                .teamId(1L).userId(1L).build();

        Team team = Team.builder().teamId(1L).name("name").build();
        Member member = Member.builder()
                .userId(1L) .nickname("nickname").password(passwordEncoder.encode("password")) .img("img").email("email") .refreshToken("token").build();
        UserTeam userTeam = UserTeam.builder().tid(team).uid(member).build();

        when(teamRepository.findById(any())).thenReturn(Optional.ofNullable(team));
        when(memberRepository.findById(any())).thenReturn(Optional.ofNullable(member));
        when(userTeamRepository.existsByUidAndTid(any(),any())).thenReturn(false);
        when(userTeamRepository.save(any())).thenReturn(userTeam);

        //when
        TeamDto result = teamService.insertTeamMember(teamMemberRequestDto);

        //then
        assertThat(result.getName()).isEqualTo(TeamDto.of(team).getName());
    }

    @DisplayName("팀 멤버 삭제")
    @Test
    void deleteTeamMember() {
        //given
        TeamMemberRequestDto teamMemberRequestDto = TeamMemberRequestDto.builder()
                .teamId(1L).userId(1L).build();

        Team team = Team.builder().teamId(1L).name("name").build();
        Member member = Member.builder()
                .userId(1L) .nickname("nickname").password(passwordEncoder.encode("password")) .img("img").email("email") .refreshToken("token").build();
        UserTeam userTeam = UserTeam.builder().tid(team).uid(member).build();

        when(teamRepository.findById(any())).thenReturn(Optional.ofNullable(team));
        when(memberRepository.findById(any())).thenReturn(Optional.ofNullable(member));
        when(userTeamRepository.findByUidAndTid(any(),any())).thenReturn(Optional.ofNullable(userTeam));

        //when
        int result = teamService.deleteTeamMember(teamMemberRequestDto);

        //then
        assertThat(result).isEqualTo(1);
    }
}