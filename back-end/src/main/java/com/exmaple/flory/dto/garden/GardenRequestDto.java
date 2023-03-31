package com.exmaple.flory.dto.garden;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class GardenRequestDto {

    private int type; //garden type
    private long userId;
    private long gardenId;
    private String imgSrc; //이미지 경로
}
