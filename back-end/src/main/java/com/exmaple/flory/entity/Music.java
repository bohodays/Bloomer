package com.exmaple.flory.entity;

import lombok.*;

import javax.persistence.*;

@Getter
@Builder
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Music extends BaseTime{

    @Id
    @Column(name="id",nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "path",nullable = false)
    private String path;

    @Column(name="title",nullable = false)
    private String title;

    @Column(name="artist",nullable = false)
    private String artist;
}
