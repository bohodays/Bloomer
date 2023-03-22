package com.exmaple.flory.repository;

import com.exmaple.flory.dto.team.TeamDto;
import com.exmaple.flory.dto.team.TeamQueryDto;
import com.exmaple.flory.entity.Team;
import com.querydsl.core.Tuple;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QTeamRepository {
    public List<Team> getAllTeam(Long userId);
}
