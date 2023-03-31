package com.exmaple.flory.dto.garden;

import lombok.*;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class GardenResponseDto {

    private Long id;
    private String gardenPath;
    private String nickname;
    private String artist;
    private String title; //노래 제목
    private LocalDateTime deadline;
    private int type;
}
