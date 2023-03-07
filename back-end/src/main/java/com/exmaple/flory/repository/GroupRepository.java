package com.exmaple.flory.repository;

import com.exmaple.flory.entity.Group;
import com.exmaple.flory.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GroupRepository extends JpaRepository<Group, Integer> {
}
