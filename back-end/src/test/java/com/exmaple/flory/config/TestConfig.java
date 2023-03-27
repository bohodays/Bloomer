package com.exmaple.flory.config;

import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.Bean;

import javax.persistence.EntityManagerFactory;

@TestConfiguration
public class TestConfig {
    @Autowired
    private EntityManagerFactory entityManagerFactory;

    @Bean
    public JPAQueryFactory jpaQueryFactory() {
        return new JPAQueryFactory(entityManagerFactory.createEntityManager());
    }

}
