package com.exmaple.flory.entity;

import com.exmaple.flory.dto.garden.GardenResponseDto;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;


@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "garden")
@Entity
public class Garden extends BaseTime {

    @Id
    @Column(name = "id",nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "path")
    private String path;

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
                .path(path)
                .deadline(deadLine)
                .music(music)
                .member(member)
                .build();
    }
}
