package com.exmaple.flory.repository;

import com.exmaple.flory.dto.member.MemberResponseDto;
import com.exmaple.flory.dto.team.TeamDto;
import com.exmaple.flory.dto.team.TeamQueryDto;
import com.exmaple.flory.entity.QMember;
import com.exmaple.flory.entity.QTeam;
import com.exmaple.flory.entity.QUserTeam;
import com.exmaple.flory.entity.UserTeam;
import com.querydsl.core.Tuple;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

import static com.exmaple.flory.entity.QTeam.team;
import static com.exmaple.flory.entity.QUserTeam.userTeam;


public class QTeamRepositoryImpl implements QTeamRepository {

    private final JPAQueryFactory jpaQueryFactory;

    public QTeamRepositoryImpl(JPAQueryFactory jpaQueryFactory) {
        this.jpaQueryFactory = jpaQueryFactory;
    }

    @Override
    public List<TeamDto> getAllTeam(Long userId) {

        QTeam team = QTeam.team;
        QUserTeam userTeam = QUserTeam.userTeam;

        List<Tuple> tuples = jpaQueryFactory
                .select(team.teamId, team.name, team.info, team.open,
                        userTeam.uid, userTeam.status, userTeam.manager, team.createdDate)
                .from(team)
                .leftJoin(team.userTeamList, userTeam)
                .fetchJoin()
                .fetch();

        List<TeamDto> teamDtoList = new ArrayList<>();

        tuples.forEach(tuple -> {
            Long teamId = tuple.get(team.teamId);
            String name = tuple.get(team.name);
            String info = tuple.get(team.info);
            Boolean open = tuple.get(team.open);
            MemberResponseDto memberResponseDto = new MemberResponseDto(
                    tuple.get(userTeam.uid).getUserId(),
                    tuple.get(userTeam.uid).getNickname(),
                    tuple.get(userTeam.uid).getImg(),
                    tuple.get(userTeam.uid).getEmail()
            );
            LocalDateTime createdDate = tuple.get(team.createdDate);
            Integer status = tuple.get(userTeam.status);

            TeamDto teamDto = teamDtoList.stream().filter(t -> t.getTeamId().equals(teamId)).findFirst()
                    .orElseGet(() -> {
                        TeamDto newTeamDto = new TeamDto(teamId, name, info, open, new ArrayList<>(), createdDate, status);
                        teamDtoList.add(newTeamDto);
                        return newTeamDto;
                    });

            if (memberResponseDto.getUserId() != null) {
                teamDto.getUserTeamList().add(memberResponseDto);
            }
        });

        return teamDtoList;
    }

}
