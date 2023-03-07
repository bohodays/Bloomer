package com.exmaple.flory.dto.group;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class GroupRequestDto {
    @NotNull
    @Size(min = 1, max = 30)
    private String name; //그룹 이름

}
