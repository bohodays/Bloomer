package com.exmaple.flory.repository;

import com.exmaple.flory.entity.Garden;
import com.exmaple.flory.entity.QGarden;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.extern.slf4j.Slf4j;

import java.util.Optional;

import static com.exmaple.flory.entity.QGarden.garden;
@Slf4j
public class QGardenRepositoryImpl implements QGardenRepository {

    private final JPAQueryFactory jpaQueryFactory;

    public QGardenRepositoryImpl(JPAQueryFactory jpaQueryFactory) {
        this.jpaQueryFactory = jpaQueryFactory;
    }

    @Override
    public Optional<Garden> findByMonth(Integer month) {

        return Optional.of(
                jpaQueryFactory
                        .selectFrom(garden)
                        .where(garden.createdDate.month().eq(month))
                        .fetchOne());
    }
}
