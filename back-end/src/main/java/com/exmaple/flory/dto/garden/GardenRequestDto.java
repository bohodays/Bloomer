package com.exmaple.flory.dto.garden;

import com.exmaple.flory.entity.Garden;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class GardenRequestDto {

    private long userId;
}
