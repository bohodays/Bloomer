package com.exmaple.flory.controller;

import com.exmaple.flory.dto.team.TeamDto;
import com.exmaple.flory.dto.team.TeamInsertRequestDto;
import com.exmaple.flory.dto.team.TeamMemberRequestDto;
import com.exmaple.flory.dto.team.TeamReNameRequestDto;
import com.exmaple.flory.exception.error.ErrorCode;
import com.exmaple.flory.response.ErrorResponse;
import com.exmaple.flory.response.SuccessResponse;
import com.exmaple.flory.service.TeamService;
import com.exmaple.flory.util.SecurityUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/team")
public class TeamController {
    private final TeamService teamService;

    @GetMapping("/{teamId}")
    public ResponseEntity<?> getTeam(@PathVariable Long teamId){
        try{
            TeamDto teamDto = teamService.getTeam(teamId);
            return new ResponseEntity<>(new SuccessResponse(teamDto), HttpStatus.OK);
        } catch(RuntimeException e){
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INVALID_TEAM),HttpStatus.NOT_FOUND);
        } catch (Exception e){
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INTERNAL_SERVER_ERROR),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping
    public ResponseEntity<?> insertTeam(@RequestBody TeamInsertRequestDto teamInsertRequestDto){
        try{
            TeamDto teamDto = teamService.insertTeam(teamInsertRequestDto);
            return new ResponseEntity<>(new SuccessResponse(teamDto), HttpStatus.OK);
        } catch(RuntimeException e){
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INVALID_INPUT),HttpStatus.METHOD_NOT_ALLOWED);
        } catch (Exception e){
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INTERNAL_SERVER_ERROR),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{teamId}")
    public ResponseEntity<?> deleteTeam(@PathVariable Long teamId){
        try{
            teamService.deleteTeam(teamId);
            return new ResponseEntity<>(new SuccessResponse("그룹 삭제 되었습니다."),HttpStatus.OK);
        } catch(RuntimeException e){
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INVALID_TEAM),HttpStatus.NOT_FOUND);
        } catch (Exception e){
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INTERNAL_SERVER_ERROR),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping
    public ResponseEntity<?> updateGroupName(@RequestBody TeamReNameRequestDto teamReNameRequestDto){
        try{
            TeamDto teamDto = teamService.updateTeamName(teamReNameRequestDto);
            return new ResponseEntity<>(new SuccessResponse(teamDto),HttpStatus.OK);
        } catch(RuntimeException e){
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INVALID_TEAM),HttpStatus.NOT_FOUND);
        } catch (Exception e){
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INTERNAL_SERVER_ERROR),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/member")
    public ResponseEntity<?> getUserTeam(){
        try{
            // userId : SecurityUtil.getCurrentMemberId()
            List<TeamDto> teamDto = teamService.getUserTeam(SecurityUtil.getCurrentMemberId()); //속한 팀 목록 가져오기
            return new ResponseEntity<>(new SuccessResponse(teamDto), HttpStatus.OK);
        } catch(RuntimeException e){
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.NO_USER),HttpStatus.NOT_FOUND);
        } catch (Exception e){
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INTERNAL_SERVER_ERROR),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/member")
    public ResponseEntity<?> insertTeamMember(@RequestBody TeamMemberRequestDto teamMemberRequestDto){
        try{
            TeamDto teamDto = teamService.insertTeamMember(teamMemberRequestDto);
            return new ResponseEntity<>(new SuccessResponse(teamDto), HttpStatus.OK);
        } catch(RuntimeException e){
            return new ResponseEntity<>(new ErrorResponse(HttpStatus.NOT_FOUND, e.getMessage()).getHttpStatus(), HttpStatus.NOT_FOUND);
        } catch (Exception e){
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INTERNAL_SERVER_ERROR),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/member")
    public ResponseEntity<?> deleteTeamMember(@RequestBody TeamMemberRequestDto teamMemberRequestDto){
        try{
            teamService.deleteTeamMember(teamMemberRequestDto);
            return new ResponseEntity<>(new SuccessResponse("해당 멤버가 삭제되었습니다."),HttpStatus.OK);
        } catch(RuntimeException e){
            return new ResponseEntity<>(new ErrorResponse(HttpStatus.NOT_FOUND, e.getMessage()).getHttpStatus(), HttpStatus.NOT_FOUND);
        } catch (Exception e){
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INTERNAL_SERVER_ERROR),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
