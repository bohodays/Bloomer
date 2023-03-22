package com.exmaple.flory.repository;

import com.exmaple.flory.dto.member.MemberResponseDto;
import com.exmaple.flory.dto.team.TeamDto;
import com.exmaple.flory.dto.team.TeamQueryDto;
import com.exmaple.flory.entity.*;
import com.querydsl.core.Tuple;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

import static com.exmaple.flory.entity.QDiary.diary;
import static com.exmaple.flory.entity.QMember.member;
import static com.exmaple.flory.entity.QTeam.team;
import static com.exmaple.flory.entity.QUserTeam.userTeam;


public class QTeamRepositoryImpl implements QTeamRepository {

    private final JPAQueryFactory jpaQueryFactory;

    public QTeamRepositoryImpl(JPAQueryFactory jpaQueryFactory) {
        this.jpaQueryFactory = jpaQueryFactory;
    }

    @Override
    public List<Team> getAllTeam(Long userId) {

        return jpaQueryFactory
                .selectFrom(team)
                .leftJoin(userTeam.tid, team)
                .on(team.teamId.eq(userTeam.tid.teamId))
                .fetch();
    }
    //select * from team left join user_team on team.id = user_team.tid where user_team.uid = 2 or user_team.status  = 1
}
