package com.exmaple.flory.repository;

import com.exmaple.flory.entity.Diary;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface QDiaryRepository {

    List<Diary> findByGardenId(Long gardenId);

    List<Diary> findByMemberId(Long memberId);

    List<Diary> findPublicByGardenId(Long gardenId);

    List<Diary> findTeamByGardenId(Long gardenId);

    List<Diary> findPublicByMemberId(Long memberId);

    List<Diary> findTeamByMemberId(Long memberId);

    Diary findByXAndYAndZInGarden(Long gardenId, String x, String y, String z);

    List<Diary> findDiaryInMap(String lat1, String lng1, String lat2, String lng2);

    List<Diary> findDiaryInMonth(Long memberId, Date firstDay, Date lastDay);
}
