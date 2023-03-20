package com.exmaple.flory.service;

import com.exmaple.flory.dto.comment.CommentDto;
import com.exmaple.flory.dto.comment.CommentListDto;
import com.exmaple.flory.dto.diary.DiaryDto;
import com.exmaple.flory.entity.Comment;
import com.exmaple.flory.entity.Diary;
import com.exmaple.flory.entity.Garden;
import com.exmaple.flory.entity.Member;
import com.exmaple.flory.repository.CommentRepository;
import com.exmaple.flory.repository.DiaryRepository;
import com.exmaple.flory.repository.MemberRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.*;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(SpringExtension.class)
public class CommentServiceTest {
    @InjectMocks
    CommentService commentService;

    @Mock
    CommentRepository commentRepository;

    @Mock
    MemberRepository memberRepository;

    @Mock
    DiaryRepository diaryRepository;

    private final Member member = Member
            .builder()
            .userId(1L)
            .email("ssafy@naver.com")
            .password("1234")
            .nickname("abcd")
            .build();

    private final Garden garden = Garden
            .builder()
            .id(1L)
            .member(member)
            .path("/usr/app")
            .build();

    private final DiaryDto diaryDto = DiaryDto.builder()
            .id(1L).content("content").imgSrc("imgSrc").lat(10).lng(10).publicStatus("전체공개").x("x").y("y").z("z").address("address")
            .garden(garden.toDiaryDto()).build();

    private final Comment comment = Comment.builder()
            .id(1L).diary(diaryDto.toEntity()).member(member).content("content").build();

    private final CommentDto commentDto = CommentDto.builder()
            .id(1L).content("content").createdTime(new Date()).did(1L).uid(1L).diary(diaryDto).build();

    @DisplayName("댓글 수정 테스트")
    @Test
    public void updateCommentTest() throws Exception{
        Map<String,String> info = new HashMap<>();
        Member member = Member.builder()
                .userId(1L).email("email").nickname("name").build();
        Diary diary = diaryDto.toEntity();
        diary.setGarden(garden);

        info.put("id","1");
        info.put("content","content");

        commentDto.setDiary(diaryDto);
        Comment comment = commentDto.toEntity();
        comment.setMember(member);
        comment.setDiary(diary);

        when(commentRepository.save(any())).thenReturn(comment);
        when(commentRepository.findById(any())).thenReturn(Optional.of(comment));
        when(memberRepository.findById(any())).thenReturn(Optional.ofNullable(member));
        when(diaryRepository.findById(any())).thenReturn(Optional.ofNullable(diary));

        CommentDto result = commentService.updateComment(info);

        assertEquals(commentDto.getContent(),result.getContent());
    }

    @DisplayName("댓글 생성 테스트")
    @Test
    public void insertCommentTest() throws Exception {
        Diary diary = diaryDto.toEntity();
        diary.setGarden(garden);

        when(diaryRepository.findById(any())).thenReturn(Optional.ofNullable(diary));
        when(memberRepository.findById(any())).thenReturn(Optional.ofNullable(member));
        when(commentRepository.save(any())).thenReturn(comment);

        commentDto.setDiary(diaryDto);

        CommentDto result = commentService.insertComment(commentDto);

        assertEquals(result.getContent(),commentDto.getContent());
    }

    @DisplayName("댓글 목록 조회 테스트")
    @Test
    public void getCommentListTest() throws Exception{
        List<Comment> comments = new ArrayList<>();
        Diary diary = diaryDto.toEntity();
        diary.setGarden(garden);

        comment.setDiary(diary);
        comments.add(comment);
        when(commentRepository.findByDid(any())).thenReturn(comments);
        when(memberRepository.findById(any())).thenReturn(Optional.ofNullable(member));

        List<CommentListDto> result = commentService.getCommentList(1L);

        assertEquals(result.size(),comments.size());
    }

    @DisplayName("댓글 삭제")
    @Test
    public void deleteCommentTest(){
        when(commentRepository.findById(any())).thenReturn(Optional.ofNullable(commentDto.toEntity()));

        int result = commentService.deleteComment(1L);

        assertEquals(1,result);
    }
}
