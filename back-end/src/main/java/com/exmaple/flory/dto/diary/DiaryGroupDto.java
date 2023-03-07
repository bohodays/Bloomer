package com.exmaple.flory.dto.diary;

import com.exmaple.flory.entity.DiaryGroup;
import lombok.*;
import lombok.extern.slf4j.Slf4j;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
@Slf4j
public class DiaryGroupDto {
    private Long id;

    private Long diaryId;

    private Long groupId;

    public DiaryGroup toEntity(){
        return DiaryGroup.builder()
                .id(id).diaryId(diaryId).groupId(groupId).build();
    }
}
