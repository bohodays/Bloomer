package com.exmaple.flory.repository;

import com.exmaple.flory.entity.Diary;
import com.querydsl.jpa.JPAExpressions;
import com.querydsl.jpa.impl.JPAQueryFactory;

import java.util.List;

import static com.exmaple.flory.entity.QDiary.diary;
import static com.exmaple.flory.entity.QGarden.garden;


public class QDiaryRepositoryImpl implements QDiaryRepository{

    private final JPAQueryFactory jpaQueryFactory;

    public QDiaryRepositoryImpl(JPAQueryFactory jpaQueryFactory) {
        this.jpaQueryFactory = jpaQueryFactory;
    }

    @Override
    public List<Diary> findByGardenId(Long gardenId) {
        return jpaQueryFactory
                .selectFrom(diary)
                .leftJoin(diary.garden, garden)
                .on(garden.id.eq(gardenId))
                .fetch();
    }

    @Override
    public List<Diary> findByMemberId(Long memberId) {
        return jpaQueryFactory
                .selectFrom(diary)
                .where(diary.garden.id.in(
                        JPAExpressions
                                .select(garden.id)
                                .from(garden)
                                .where(garden.member.userId.eq(memberId))
                ))
                .fetch();
    }
}
