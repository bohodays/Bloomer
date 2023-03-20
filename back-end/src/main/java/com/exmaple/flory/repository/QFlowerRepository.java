package com.exmaple.flory.repository;

import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QFlowerRepository {
    List<Long> getEmotionKey(Long flowerId);

}
