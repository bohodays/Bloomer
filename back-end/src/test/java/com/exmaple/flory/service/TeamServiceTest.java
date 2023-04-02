package com.exmaple.flory.service;

import com.exmaple.flory.dto.member.MemberResponseDto;
import com.exmaple.flory.dto.team.*;
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

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.ArgumentMatchers.any;
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
        Team team = Team.builder()
                .teamId(1L).name("name").info("info").open(true).build();

        when(teamRepository.findById(any())).thenReturn(Optional.ofNullable(team));

        //when
        TeamDto result = teamService.getTeam(teamId);

        //then
        assertThat(result.getName()).isEqualTo(team.getName());
    }

    @DisplayName("키워드로 전체 팀 조회")
    @Test
    void getAllTeamByKeyWord(){
        //given
        String keyword = "na";
        Long userId = 1L;

        Team team = Team.builder()
                .teamId(1L).name("name").info("info").open(true).build();
        Member member = Member.builder()
                .userId(1L).nickname("nickname").password(passwordEncoder.encode("password")) .img("img").email("email") .refreshToken("token").build();

        List<Team> teamList = new ArrayList<>();
        teamList.add(team);

        List<TeamDto> teamDtoList = new ArrayList<>();
        teamDtoList.add(TeamDto.of(team,member));

        when(memberRepository.findById(any())).thenReturn(Optional.ofNullable(member));
        when(teamRepository.getAllTeamByKeyWord(any(),any())).thenReturn(teamList);

        //when
        List<TeamDto> result = teamService.getAllTeamByKeyWord(keyword,userId);

        //then
        assertThat(result.size()).isEqualTo(teamDtoList.size());
    }

    @DisplayName("전체 팀 조회")
    @Test
    void getAllTeam(){
        //given
        Long userId = 1L;

        Team team = Team.builder()
                .teamId(1L).name("name").info("info").open(true).build();
        Member member = Member.builder()
                .userId(1L).nickname("nickname").password(passwordEncoder.encode("password")) .img("img").email("email") .refreshToken("token").build();

        List<Team> teamList = new ArrayList<>();
        teamList.add(team);

        List<TeamDto> teamDtoList = new ArrayList<>();
        teamDtoList.add(TeamDto.of(team,member));

        when(memberRepository.findById(any())).thenReturn(Optional.ofNullable(member));
        when(teamRepository.getAllTeam(any())).thenReturn(teamList);

        //when
        List<TeamDto> result = teamService.getAllTeam(userId);

        //then
        assertThat(result.size()).isEqualTo(teamDtoList.size());
    }

    @DisplayName("팀 저장")
    @Test
    void insertTeam() {
        //given
        TeamInsertRequestDto teamInsertRequestDto = TeamInsertRequestDto.builder()
                .name("name").info("info").open(true).hostId(1L).build();

        Team team = Team.builder()
                .teamId(1L).name("name").info("info").open(true).build();
        Member member = Member.builder()
                .userId(1L) .nickname("nickname").password(passwordEncoder.encode("password")) .img("img").email("email") .refreshToken("token").build();

        UserTeam userTeam = UserTeam.builder()
                .userTeamId(1L).tid(team).uid(member).status(0).manager(1).build();

        List<MemberResponseDto> userTeamList = new ArrayList<>();
        MemberResponseDto memberResponseDto = MemberResponseDto.of(member);
        userTeamList.add(memberResponseDto);

        TeamDto teamDto = TeamDto.toTeam(team, userTeamList);

        when(teamRepository.save(any())).thenReturn(team);
        when(memberRepository.findById(any())).thenReturn(Optional.ofNullable(member));
        when(userTeamRepository.save(any())).thenReturn(userTeam);

        //when
        TeamDto result = teamService.insertTeam(teamInsertRequestDto);

        assertThat(result.getUserTeamList().size()).isEqualTo(teamDto.getUserTeamList().size());
        assertThat(result.getName()).isEqualTo(teamDto.getName());
    }

    @DisplayName("팀 삭제")
    @Test
    void deleteTeam() {
        //given
        Long teamId = 1L;
        Team team = Team.builder()
                .teamId(1L).name("name").info("info").open(true).build();

        when(teamRepository.findById(any())).thenReturn(Optional.ofNullable(team));

        //when
        teamService.deleteTeam(teamId);

        //then
        verify(teamRepository, times(1)).findById(any());
        verify(teamRepository, times(1)).delete(any());
    }

    @DisplayName("팀 정보 변경")
    @Test
    void updateTeam() {
        //given
        TeamUpdateRequestDto teamUpdateRequestDto = TeamUpdateRequestDto.builder()
                .teamId(1L).name("rename").info("info").open(true).build();
        Team team = Team.builder()
                .teamId(1L).name("name").info("info").open(true).build();

        when(teamRepository.findById(any())).thenReturn(Optional.ofNullable(team));
        team.updateTeam(teamUpdateRequestDto.getName(),teamUpdateRequestDto.getInfo(),teamUpdateRequestDto.getOpen());
        when(teamRepository.save(any())).thenReturn(team);

        //when
        TeamDto result = teamService.updateTeam(teamUpdateRequestDto);

        //then
        assertThat(result.getName()).isEqualTo(team.getName());
    }

    @DisplayName("해당 유저가 속한 팀 목록 가져오기")
    @Test
    void getUserTeam() {
        //given
        Long userId = 1L;
        Member member = Member.builder()
                .userId(1L).nickname("nickname").password(passwordEncoder.encode("password")).img("img").email("email") .refreshToken("token").build();

        Team team = Team.builder()
                .teamId(1L).name("name").info("info").open(true).build();
        Team team2 = Team.builder()
                .teamId(2L).name("name").info("info").open(true).build();

        UserTeam userTeam = UserTeam.builder()
                .userTeamId(1L).tid(team).uid(member).status(0).manager(1).build();
        UserTeam userTeam2 = UserTeam.builder()
                .userTeamId(2L).tid(team2).uid(member).status(0).manager(1).build();

        List<UserTeam> userTeamList = new ArrayList<>();
        userTeamList.add(userTeam);
        userTeamList.add(userTeam2);

        List<TeamDto> teamDtoList = new ArrayList<>();
        teamDtoList.add(TeamDto.of(team));
        teamDtoList.add(TeamDto.of(team2));

        when(memberRepository.findById(any())).thenReturn(Optional.ofNullable(member));
        when(userTeamRepository.findAllByUidAndStatus(any(Member.class), eq(1))).thenReturn(userTeamList);

        //when
        List<TeamDto> result = teamService.getUserTeam(userId);

        //then
        assertThat(result.size()).isEqualTo(teamDtoList.size());
    }

    @DisplayName("팀 멤버 추가")
    @Test
    void insertTeamMember() {
        //given
        TeamMemberDto teamMemberDto = TeamMemberDto.builder()
                .teamId(1L).userId(1L).message("message").build();

        Team team = Team.builder()
                .teamId(1L).name("name").info("info").open(true).build();
        Member member = Member.builder()
                .userId(1L) .nickname("nickname").password(passwordEncoder.encode("password")) .img("img").email("email") .refreshToken("token").build();
        UserTeam userTeam = UserTeam.builder()
                .userTeamId(1L).tid(team).uid(member).status(0).manager(1).build();

        when(teamRepository.findById(any())).thenReturn(Optional.ofNullable(team));
        when(memberRepository.findById(any())).thenReturn(Optional.ofNullable(member));
        when(userTeamRepository.existsByUidAndTid(any(),any())).thenReturn(false);
        when(userTeamRepository.save(any())).thenReturn(userTeam);

        //when
        TeamDto result = teamService.insertTeamMember(teamMemberDto);

        //then
        assertThat(result.getName()).isEqualTo(TeamDto.of(team).getName());
    }

    @DisplayName("팀 멤버 승인")
    @Test
    void approveTeamMember(){
        TeamApproveRequestDto teamApproveRequestDto = TeamApproveRequestDto.builder()
                .teamId(1L).userId(1L).build();

        Team team = Team.builder()
                .teamId(1L).name("name").info("info").open(true).build();
        Member member = Member.builder()
                .userId(1L) .nickname("nickname").password(passwordEncoder.encode("password")) .img("img").email("email") .refreshToken("token").build();
        UserTeam userTeam = UserTeam.builder()
                .userTeamId(1L).tid(team).uid(member).status(0).manager(1).build();

        when(teamRepository.findById(any())).thenReturn(Optional.ofNullable(team));
        when(memberRepository.findById(any())).thenReturn(Optional.ofNullable(member));
        when(userTeamRepository.findByUidAndTid(any(), any())).thenReturn(Optional.ofNullable(userTeam));
        userTeam.updateUserTeam(1);
        when(userTeamRepository.save(any())).thenReturn(userTeam);

        //when
        TeamDto result = teamService.approveTeamMember(teamApproveRequestDto);

        //then
        assertThat(result.getName()).isEqualTo(TeamDto.of(team).getName());
    }

    @DisplayName("팀 멤버 삭제")
    @Test
    void deleteTeamMember() {
        //given

        Team team = Team.builder()
                .teamId(1L).name("name").info("info").open(true).build();
        Member member = Member.builder()
                .userId(1L) .nickname("nickname").password(passwordEncoder.encode("password")) .img("img").email("email") .refreshToken("token").build();
        UserTeam userTeam = UserTeam.builder()
                .userTeamId(1L).tid(team).uid(member).status(0).manager(1).build();

        when(teamRepository.findById(any())).thenReturn(Optional.ofNullable(team));
        when(memberRepository.findById(any())).thenReturn(Optional.ofNullable(member));
        when(userTeamRepository.findByUidAndTid(any(),any())).thenReturn(Optional.ofNullable(userTeam));

        //when
//        int result = teamService.deleteTeamMember(teamMemberDto);

        //then
//        assertThat(result).isEqualTo(1);
    }

    @DisplayName("팀 가입 신청 내역 조회")
    @Test
    void signTeamMember() {
        Long teamId = 1L;

        Team team = Team.builder()
                .teamId(1L).name("name").info("info").open(true).build();
        Member member = Member.builder()
                .userId(1L) .nickname("nickname").password(passwordEncoder.encode("password")) .img("img").email("email") .refreshToken("token").build();
        UserTeam userTeam = UserTeam.builder()
                .userTeamId(1L).tid(team).uid(member).status(0).manager(1).build();

        List<UserTeam> userTeamList = new ArrayList<>();
        userTeamList.add(userTeam);

        List<TeamMemberResponseDto> teamMemberResponseDtoList = new ArrayList<>();
        teamMemberResponseDtoList.add(TeamMemberResponseDto.of(userTeam));

        when(teamRepository.findById(any())).thenReturn(Optional.ofNullable(team));
        when(userTeamRepository.findAllByTidAndStatus(any(Team.class), eq(0))).thenReturn(userTeamList);
        when(memberRepository.findById(any())).thenReturn(Optional.ofNullable(member));
        when(userTeamRepository.findByUidAndTid(any(), any())).thenReturn(Optional.ofNullable(userTeam));

        List<TeamMemberResponseDto> result = teamService.signTeamMember(teamId, 1L);

        assertThat(result.size()).isEqualTo(teamMemberResponseDtoList.size());
    }
}