package com.exmaple.flory.entity;

import com.exmaple.flory.dto.guest.GuestResponseDto;
import lombok.*;

import javax.persistence.*;


@AllArgsConstructor
@NoArgsConstructor
@Builder
@Setter
@Getter
@Table(name = "guest_book")
@Entity
public class Guest extends BaseTime{

    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String color;

    @JoinColumn(name = "uid")
    @ManyToOne
    private Member member;

    @JoinColumn(name = "gid")
    @ManyToOne
    private Garden garden;

    @Column
    private String content;

    public GuestResponseDto toResponseDto() {

        return GuestResponseDto.builder()
                .nickName(member.getNickname())
                .userId(member.getUserId())
                .gardenId(garden.getId())
                .color(color)
                .book_id(id)
                .contents(content)
                .created_time(getCreatedDate())
                .build();
    }
}
