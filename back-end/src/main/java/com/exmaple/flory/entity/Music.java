package com.exmaple.flory.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "music")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Builder
@Slf4j
public class Music {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "path")
    private String path;

    @Column(name = "title")
    private String title;

    @Column(name = "artist")
    private String artist;

    @Builder.Default
    @JsonIgnore
    @OneToMany(mappedBy = "music", cascade = CascadeType.ALL)
    private List<Diary> diaryList = new ArrayList<>();
}
