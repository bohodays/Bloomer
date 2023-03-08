package com.exmaple.flory.repository;

import com.exmaple.flory.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository <Comment, Long>{

    @Query(value = "select * from comment where did=:did", nativeQuery = true)
    public List<Comment> findByDid(@Param("did") Long did);
}
