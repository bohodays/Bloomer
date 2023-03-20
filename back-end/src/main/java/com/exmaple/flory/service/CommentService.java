package com.exmaple.flory.service;

import com.exmaple.flory.dto.comment.CommentDto;
import com.exmaple.flory.dto.comment.CommentListDto;
import com.exmaple.flory.dto.member.MemberResponseDto;
import com.exmaple.flory.entity.Comment;
import com.exmaple.flory.entity.Diary;
import com.exmaple.flory.entity.Member;
import com.exmaple.flory.repository.CommentRepository;
import com.exmaple.flory.repository.DiaryRepository;
import com.exmaple.flory.repository.MemberRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
@Slf4j
public class CommentService {
    @Autowired
    CommentRepository commentRepository;

    @Autowired
    DiaryRepository diaryRepository;

    @Autowired
    MemberRepository memberRepository;

    @Transactional
    public CommentDto insertComment(CommentDto commentDto) throws Exception{
        Optional<Diary> diary = diaryRepository.findById(commentDto.getDid());
        Optional<Member> member = memberRepository.findById(commentDto.getUid());


        if(diary.isEmpty() || member.isEmpty()) throw new Exception();

        log.info("Diary: {}",diary.get());
        log.info("DiaryinMember: {}",diary.get().getGarden().getMember());
        log.info("gardendiarydto: {}",diary.get().getGarden().toDiaryDto());

        commentDto.setDiary(diary.get().toDto());
        Comment comment = commentDto.toEntity();
        comment.setMember(member.get());

        log.info("insert 요청: {}",commentDto);
        log.info("insert 요청: {}",comment);

        Comment result = commentRepository.save(comment);
        result.setDiary(diary.get());

        log.info("insert 요청: {}",result);

        return result.toDto();
    }

    public List<CommentListDto> getCommentList(Long diaryId) throws Exception {
        List<Comment> commentList = commentRepository.findByDid(diaryId);
        List<CommentListDto> comments = new ArrayList<>();
        log.info("comment 목록: {}, {}", diaryId, commentList.size());

        for(int i=0;i<commentList.size();i++){
            CommentDto commentDto = commentList.get(i).toDto();
            Optional<Member> member = memberRepository.findById(commentDto.getUid());

            if(member.isEmpty()) throw new Exception();

            CommentListDto commentListDto = CommentListDto.builder()
                    .id(commentDto.getId()).member(MemberResponseDto.of(member.get())).content(commentDto.getContent()).createdTime(commentDto.getCreatedTime()).build();

            comments.add(commentListDto);
        }

        return comments;
    }

    @Transactional
    public CommentDto updateComment(Map<String,String> updateInfo) throws Exception{
        Long id =  Long.parseLong(updateInfo.get("id"));
        String content = updateInfo.get("content");

        Optional<Comment> comment = commentRepository.findById(id);

        if(comment.isEmpty()) throw new Exception();
        CommentDto commentDto = comment.get().toDto();
        log.info("dto: {}",commentDto);
        Optional<Member> member = memberRepository.findById(commentDto.getUid());
        Optional<Diary> diary = diaryRepository.findById(commentDto.getDid());

        commentDto.setContent(content);

        if(member.isEmpty() || diary.isEmpty()) throw new Exception();

        commentDto.setDiary(diary.get().toDto());

        Comment comment1 = commentDto.toEntity();
        comment1.setMember(member.get());

        return commentRepository.save(comment1).toDto();
    }

    @Transactional
    public int deleteComment(Long commentId){
        Optional<Comment> comment = commentRepository.findById(commentId);

        if(comment.isPresent()){
            commentRepository.delete(comment.get());
            return 1;
        }
        else {
            return 0;
        }
    }
}
