package com.exmaple.flory.repository;

import com.exmaple.flory.entity.DiaryTeam;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiaryTeamRepository extends JpaRepository<DiaryTeam,Long>, QDiaryTeamRepository {

}
