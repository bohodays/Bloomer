package com.exmaple.flory.repository;

import com.exmaple.flory.entity.Diary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface DiaryRepository extends JpaRepository <Diary, Long>, QDiaryRepository{

//    List<Diary> findByGarden_Id(Long gardenId);

//    List<Diary> findByUserId(Long userId);

    Diary findByXAndYAndZ(String x, String y, String z);
}
