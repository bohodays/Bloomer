package com.exmaple.flory.dto.garden;

import com.exmaple.flory.entity.Garden;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class GardenRequestDto {

    private Long userId;
    private Long gardenId;
    private String img; //이미지 경로
    private String musicTitle;

    public Garden toEntity() {
        return Garden.builder()
                .img(img)

                .build();
    }
}
