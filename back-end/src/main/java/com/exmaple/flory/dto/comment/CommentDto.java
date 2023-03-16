package com.exmaple.flory.dto.comment;

import com.exmaple.flory.entity.Comment;
import com.exmaple.flory.entity.Diary;
import lombok.*;
import lombok.extern.slf4j.Slf4j;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
@Slf4j
public class CommentDto {

    private Long id;

    private Long did;

    private Long uid;

    private String content;

    private Date createdTime;

    private Diary diary;

    public Comment toEntity(){
        return Comment.builder()
                .id(id).content(content).createdTime(createdTime).diary(diary).build();
    }
}
