package com.exmaple.flory.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;

import java.util.List;

import static com.exmaple.flory.entity.QFlower.flower;

public class QFlowerRepositoryImpl implements QFlowerRepository {

    private final JPAQueryFactory jpaQueryFactory;

    public QFlowerRepositoryImpl(JPAQueryFactory jpaQueryFactory) {
        this.jpaQueryFactory = jpaQueryFactory;
    }

    @Override
    public List<Long> getEmotionKey(Long flowerId) {
        return jpaQueryFactory
                .select(flower.emotion.id)
                .from(flower)
                .where(flower.id.eq(flowerId))
                .fetch();
    }
}
