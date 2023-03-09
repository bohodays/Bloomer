package com.exmaple.flory.repository;

import com.exmaple.flory.dto.comment.CommentDto;
import com.exmaple.flory.dto.diary.DiaryDto;
import com.exmaple.flory.entity.Comment;
import com.exmaple.flory.entity.Diary;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.assertEquals;
@ExtendWith(SpringExtension.class)
@DataJpaTest
public class CommentRepositoryTest {
    @Autowired
    CommentRepository commentRepository;

    @Autowired
    DiaryRepository diaryRepository;

    private final CommentDto commentDto = CommentDto.builder()
            .id(1L).content("content").did(1L).uid(1L).build();

    @DisplayName("댓글 등록하기 테스트")
    @Test
    public void insertCommentTest() throws Exception{
        Comment result = commentRepository.save(commentDto.toEntity());

        Optional<Comment> comment = commentRepository.findById(result.getId());

        if(comment.isEmpty()) throw new Exception();

        assertEquals(result.getContent(),comment.get().getContent());
    }

    @DisplayName("댓글 삭제하기 테스트")
    @Test
    public void deleteCommentTest(){
        Comment comment = commentRepository.save(commentDto.toEntity());

        commentRepository.delete(comment);

        Optional<Comment> result = commentRepository.findById(1L);

        assertEquals(result,Optional.empty());
    }

    @DisplayName("일기에 해당하는 댓글 목록 가져오기 테스트")
    @Test
    public void getCommentInDiaryTest(){
        DiaryDto diaryDto = DiaryDto.builder()
                .id(1L).content("content").imgSrc("imgSrc").lat("lat").lng("lng").publicStatus("전체공개").x("x").y("y").z("z")
                .build();

        commentDto.setDiary(diaryDto.toEntity());

        List<Comment> comments = new ArrayList<>();
        comments.add(commentDto.toEntity());

        Diary diary = diaryRepository.save(diaryDto.toEntity());
        Comment comment = commentRepository.save(commentDto.toEntity());

        List<Comment> result = commentRepository.findByDid(1L);

        assertEquals(comments.size(),result.size());
    }

}
