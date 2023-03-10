package com.exmaple.flory.repository;

import com.exmaple.flory.entity.Diary;
import com.querydsl.jpa.impl.JPAQueryFactory;

import java.util.List;

public class QDiaryRepositoryImpl implements QDiaryRepository{

    private final JPAQueryFactory jpaQueryFactory;

    public QDiaryRepositoryImpl(JPAQueryFactory jpaQueryFactory) {
        this.jpaQueryFactory = jpaQueryFactory;
    }

    @Override
    public List<Diary> findByGardenId(Long gardenId) {
//        return jpaQueryFactory
//                .selectFrom(diary)
//                .innerJoin(garden.member, garden.member)
        return null;

    }
}
