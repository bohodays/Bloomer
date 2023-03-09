package com.exmaple.flory.repository;

import com.exmaple.flory.entity.Garden;

import java.util.Optional;

public interface QGardenRepository {

    public Optional<Garden> findByMonth(Integer month);
}
