package com.exmaple.flory.dto.diary;

import com.exmaple.flory.entity.Diary;
import lombok.*;
import lombok.extern.slf4j.Slf4j;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
@Slf4j
public class DiaryRequestDto {

    private Long gid;

//    private Long mid;

    private Long fid;

    private String content;

    private String imgSrc;

    private String lat;

    private String lng;

    private String publicStatus;

    private String x;

    private String y;

    private String z;

    public Diary toEntity(){
        return Diary.builder()
                .content(content).imgSrc(imgSrc).lat(lat).lng(lng).publicStatus(publicStatus).x(x).y(y).z(z).build();
    }
}
