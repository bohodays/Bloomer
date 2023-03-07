package com.exmaple.flory.dto.diary;

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



    public Diary toEntity(){
        return Diary.builder()
                .id(id).content(content).imgSrc(imgSrc).lat(lat).lng(lng).publicStatus(publicStatus).x(x).y(y).z(z).createdTime(createdTime).build();
    }

}
