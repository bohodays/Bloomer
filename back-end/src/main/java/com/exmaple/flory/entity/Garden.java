package com.exmaple.flory.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.Date;

@Entity(name="garden")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Builder
@DynamicUpdate //Update 시에 변경된 필드만 대응
@Slf4j
public class Garden {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "img_src")
    private String imgSrc;

    @Column(name = "deadline")
    private Date deadline;

    @Column(name = "created_time")
    private Date CreatedTime;

    @JoinColumn(name = "mid")
    @ManyToOne
    private Music music;
}
