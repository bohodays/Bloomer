package com.exmaple.flory.dto.diary;

import com.exmaple.flory.dto.comment.CommentDto;
import com.exmaple.flory.entity.Diary;
import com.exmaple.flory.entity.Garden;
import com.exmaple.flory.entity.Music;
import lombok.*;
import lombok.extern.slf4j.Slf4j;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
@Slf4j
public class DiaryDto {
    private Long id;

    private String content;

    private String imgSrc;

    private String lat;

    private String lng;

    private String publicStatus;

    private String x;

    private String y;

    private String z;

    private Date createdTime;

    private Garden garden;

    private Music music;

    private List<CommentDto> commentList= new ArrayList<>();

    public Diary toEntity(){
        return Diary.builder()
                .id(id).content(content).imgSrc(imgSrc).lat(lat).lng(lng).publicStatus(publicStatus).x(x).y(y).z(z).createdTime(createdTime)
                .garden(garden).music(music).build();
    }

    public void setCommentList(List<CommentDto> commentList){
        this.commentList = commentList;
    }

}
