package com.exmaple.flory.dto.garden;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class GardenRequestDto {

    private long userId;
    private long gardenId;
    private String imgSrc; //이미지 경로
}
