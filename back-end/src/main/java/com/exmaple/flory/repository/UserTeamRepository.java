package com.exmaple.flory.repository;

import com.exmaple.flory.entity.Member;
import com.exmaple.flory.entity.Team;
import com.exmaple.flory.entity.UserTeam;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserTeamRepository extends JpaRepository<UserTeam, Long> {
    List<UserTeam> findAllByUid(Member uid); // List를 Optional로 예외처리 X
    Optional<UserTeam> findByUidAndTid(Member uid, Team tid);
    boolean existsByUidAndTid(Member uid, Team tid);
}
