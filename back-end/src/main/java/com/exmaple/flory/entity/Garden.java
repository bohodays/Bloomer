package com.exmaple.flory.entity;

import com.exmaple.flory.dto.garden.GardenDiaryDto;
import com.exmaple.flory.dto.garden.GardenResponseDto;
import com.exmaple.flory.dto.member.MemberResponseDto;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;


@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "garden")
@ToString
@Entity
public class Garden extends BaseTime {

    @Id
    @Column(name = "id",nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "deadline")
    private LocalDateTime deadLine;

    @ManyToOne
    @JoinColumn(name="uid")
    private Member member;

    @ManyToOne
    @JoinColumn(name="mid")
    private Music music;

    public GardenResponseDto toResponseDto() {
        return GardenResponseDto
                .builder()
                .id(id)
                .deadline(deadLine)
                .nickname(member.getNickname())
                .build();
    }

    public GardenDiaryDto toDiaryDto(){

        return GardenDiaryDto.builder()
                .id(id).deadLine(deadLine).member(MemberResponseDto.of(member)).music(music).build();
    }
}
