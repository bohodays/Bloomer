package com.exmaple.flory.repository;

import com.exmaple.flory.entity.Diary;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QDiaryRepository {

    List<Diary> findByGardenId(Long gardenId);

    List<Diary> findByMemberId(Long memberId);
}
