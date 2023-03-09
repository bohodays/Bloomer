package com.exmaple.flory.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;

public class QDiaryRepositoryImpl implements QDiaryRepository{

    private final JPAQueryFactory jpaQueryFactory;

    public QDiaryRepositoryImpl(JPAQueryFactory jpaQueryFactory) {
        this.jpaQueryFactory = jpaQueryFactory;
    }
}
