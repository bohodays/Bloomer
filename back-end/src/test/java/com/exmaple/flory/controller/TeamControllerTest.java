package com.exmaple.flory.controller;

import com.exmaple.flory.dto.team.TeamDto;
import com.exmaple.flory.dto.team.TeamInsertRequestDto;
import com.exmaple.flory.dto.team.TeamMemberRequestDto;
import com.exmaple.flory.dto.team.TeamReNameRequestDto;
import com.exmaple.flory.entity.Team;
import com.exmaple.flory.response.SuccessResponse;
import com.exmaple.flory.service.TeamService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.TypeFactory;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.when;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(controllers = TeamController.class)
@WithMockUser(username = "1")
class TeamControllerTest {

    @MockBean
    private TeamService teamService;

    @Autowired
    private MockMvc mockMvc;

    @DisplayName("팀 조회")
    @Test
    void getTeam() throws Exception{
        Team team = Team.builder().teamId(1L).name("name").build();

        when(teamService.getTeam(any())).thenReturn(TeamDto.of(team));

        MvcResult mvcResult = mockMvc.perform(get("/api/team/{teamId}",1))
                .andExpect(status().isOk())
                .andReturn();

        SuccessResponse response = new ObjectMapper().readValue(mvcResult.getResponse().getContentAsString(), SuccessResponse.class);
        TeamDto teamDto = new ObjectMapper().convertValue(response.getResponse(), TeamDto.class);

        //then
        assertThat(teamDto.getName()).isEqualTo(TeamDto.of(team).getName());
    }

    @DisplayName("팀 조회 오류")
    @Test
    void getTeamException() throws Exception{

        when(teamService.getTeam(any())).thenThrow(new RuntimeException());

        mockMvc.perform(get("/api/team/{teamId}",1))
                .andExpect(status().isNotFound())
                .andReturn();
    }

    @DisplayName("팀 저장")
    @Test
    void insertTeam() throws Exception {
        List<Long> participant = new ArrayList<>();
        participant.add(1L);
        TeamInsertRequestDto teamInsertRequestDto = TeamInsertRequestDto.builder()
                .name("name").participant(participant).build();

        Team team = Team.builder().teamId(1L).name("name").build();

        when(teamService.insertTeam(any())).thenReturn(TeamDto.of(team));

        MvcResult mvcResult = mockMvc.perform(post("/api/team").with(csrf())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(teamInsertRequestDto)))
                        .andExpect(status().isOk())
                        .andReturn();

        SuccessResponse response = new ObjectMapper().readValue(mvcResult.getResponse().getContentAsString(), SuccessResponse.class);
        TeamDto teamDto = new ObjectMapper().convertValue(response.getResponse(), TeamDto.class);

        //then
        assertThat(teamDto.getName()).isEqualTo(TeamDto.of(team).getName());
    }

    @DisplayName("팀 저장 오류")
    @Test
    void insertTeamException() throws Exception {
        List<Long> participant = new ArrayList<>();
        participant.add(1L);
        TeamInsertRequestDto teamInsertRequestDto = TeamInsertRequestDto.builder()
                .name("name").participant(participant).build();

        when(teamService.insertTeam(any())).thenThrow(new RuntimeException());

        mockMvc.perform(post("/api/team").with(csrf())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(teamInsertRequestDto)))
                .andExpect(status().isMethodNotAllowed())
                .andReturn();

    }

    @DisplayName("팀 삭제")
    @Test
    void deleteTeam() throws Exception {
        mockMvc.perform(delete("/api/team/{teamId}",1).with(csrf()))
                .andExpect(status().isOk())
                .andReturn();
    }

//    @DisplayName("팀 삭제 오류")
//    @Test
//    void deleteTeamException() throws Exception {
//        when(teamService.deleteTeam(any())).thenThrow(new RuntimeException());
//        mockMvc.perform(delete("/api/team/{teamId}",1).with(csrf()))
//                .andExpect(status().isInternalServerError())
//                .andReturn();
//    }

    @DisplayName("팀 이름 변경")
    @Test
    void updateGroupName() throws Exception {
        TeamReNameRequestDto teamReNameRequestDto = TeamReNameRequestDto.builder().teamId(1L).name("rename").build();
        Team team = Team.builder().teamId(1L).name("name").build();
        team.updateName("rename");

        when(teamService.updateTeamName(any())).thenReturn(TeamDto.of(team));

        MvcResult mvcResult = mockMvc.perform(put("/api/team").with(csrf())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(teamReNameRequestDto)))
                        .andExpect(status().isOk())
                        .andReturn();

        SuccessResponse response = new ObjectMapper().readValue(mvcResult.getResponse().getContentAsString(), SuccessResponse.class);
        TeamDto teamDto = new ObjectMapper().convertValue(response.getResponse(), TeamDto.class);

        //then
        assertThat(teamDto.getName()).isEqualTo(TeamDto.of(team).getName());
    }

    @DisplayName("팀 이름 변경 오류")
    @Test
    void updateGroupNameException() throws Exception {
        TeamReNameRequestDto teamReNameRequestDto = TeamReNameRequestDto.builder().teamId(1L).name("rename").build();
        Team team = Team.builder().teamId(1L).name("name").build();
        team.updateName("rename");

        when(teamService.updateTeamName(any())).thenThrow(new RuntimeException());

        mockMvc.perform(put("/api/team").with(csrf())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(teamReNameRequestDto)))
                .andExpect(status().isNotFound())
                .andReturn();
    }

    @DisplayName("멤버가 속한 팀 가져오기")
    @Test
    void getUserTeam() throws Exception {
        List<TeamDto> teamDtoList = new ArrayList<>();
        Team team = Team.builder().teamId(1L).name("name").build();
        teamDtoList.add(TeamDto.of(team));

        when(teamService.getUserTeam(anyLong())).thenReturn(teamDtoList);

        MvcResult mvcResult = mockMvc.perform(get("/api/team/member"))
                .andExpect(status().isOk())
                .andReturn();

        SuccessResponse response = new ObjectMapper().readValue(mvcResult.getResponse().getContentAsString(), SuccessResponse.class);
        List<TeamDto> teamDto = new ObjectMapper().convertValue(response.getResponse(), TypeFactory.defaultInstance().constructCollectionType(List.class, TeamDto.class));

        //then
        assertThat(teamDto.size()).isEqualTo(teamDtoList.size());
    }

    @DisplayName("멤버가 속한 팀 가져오기 오류")
    @Test
    void getUserTeamException() throws Exception {
        List<TeamDto> teamDtoList = new ArrayList<>();
        Team team = Team.builder().teamId(1L).name("name").build();
        teamDtoList.add(TeamDto.of(team));

        when(teamService.getUserTeam(anyLong())).thenThrow(new RuntimeException());

        mockMvc.perform(get("/api/team/member"))
                .andExpect(status().isNotFound())
                .andReturn();
    }

    @DisplayName("팀 멤버 추가")
    @Test
    void insertTeamMember() throws Exception {
        TeamMemberRequestDto teamMemberRequestDto = TeamMemberRequestDto.builder()
                .teamId(1L).userId(1L).build();

        Team team = Team.builder().teamId(1L).name("name").build();

        when(teamService.insertTeamMember(any())).thenReturn(TeamDto.of(team));

        MvcResult mvcResult = mockMvc.perform(post("/api/team/member").with(csrf())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(teamMemberRequestDto)))
                        .andExpect(status().isOk())
                        .andReturn();

        SuccessResponse response = new ObjectMapper().readValue(mvcResult.getResponse().getContentAsString(), SuccessResponse.class);
        TeamDto teamDto = new ObjectMapper().convertValue(response.getResponse(), TeamDto.class);

        //then
        assertThat(teamDto.getName()).isEqualTo(TeamDto.of(team).getName());
    }

    @DisplayName("팀 멤버 추가 오류")
    @Test
    void insertTeamMemberException() throws Exception {
        TeamMemberRequestDto teamMemberRequestDto = TeamMemberRequestDto.builder()
                .teamId(1L).userId(1L).build();

        when(teamService.insertTeamMember(any())).thenThrow(new RuntimeException());

        mockMvc.perform(post("/api/team/member").with(csrf())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(teamMemberRequestDto)))
                .andExpect(status().isNotFound())
                .andReturn();
    }

    @DisplayName("팀 멤버 삭제")
    @Test
    void deleteTeamMember() throws Exception {
        TeamMemberRequestDto teamMemberRequestDto = TeamMemberRequestDto.builder()
                .teamId(1L).userId(1L).build();

        mockMvc.perform(delete("/api/team/member").with(csrf())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(teamMemberRequestDto)))
                        .andExpect(status().isOk())
                        .andReturn();
    }

    @DisplayName("팀 멤버 삭제 오류")
    @Test
    void deleteTeamMemberException() throws Exception {
        TeamMemberRequestDto teamMemberRequestDto = TeamMemberRequestDto.builder()
                .teamId(1L).userId(1L).build();

        when(teamService.deleteTeamMember(any())).thenThrow(new RuntimeException());

        mockMvc.perform(delete("/api/team/member").with(csrf())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(teamMemberRequestDto)))
                .andExpect(status().isNotFound())
                .andReturn();
    }
}