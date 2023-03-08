package com.exmaple.flory.dto.garden;

import com.exmaple.flory.entity.Member;
import com.exmaple.flory.entity.Music;
import lombok.*;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class GardenResponseDto {

    private Long id;
    private String path;
    private Member member;
    private Music music;
    private LocalDateTime deadline;
}
