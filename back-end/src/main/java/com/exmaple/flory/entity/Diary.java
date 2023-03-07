package com.exmaple.flory.entity;

import com.exmaple.flory.dto.diary.DiaryDto;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.Date;

@Entity(name="Diary")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Builder
@DynamicUpdate //Update 시에 변경된 필드만 대응
@Slf4j
public class Diary {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "content")
    private String content;

    @Column(name = "img_src")
    private String imgSrc;

    @Column(name = "lat")
    private String lat;

    @Column(name = "lng")
    private String lng;

    @Column(name = "public_status")
    private String publicStatus;

    @Column(name = "fid")
    private Long fid;

    @Column(name = "x")
    private String x;

    @Column(name = "y")
    private String y;

    @Column(name = "z")
    private String z;

    @Column(name = "created_time")
    @CreationTimestamp
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdTime;

    @JoinColumn(name = "mid")
    @ManyToOne
    private Music music;

    @JoinColumn(name = "gid")
    @ManyToOne
    private Garden garden;

    public DiaryDto toDto() {
        return DiaryDto.builder()
                .id(id).content(content).imgSrc(imgSrc).lat(lat).lng(lng).publicStatus(publicStatus).x(x).y(y).z(z).createdTime(createdTime).build();
    }
}
