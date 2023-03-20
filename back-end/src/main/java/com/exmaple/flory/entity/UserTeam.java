package com.exmaple.flory.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "user_team")
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserTeam {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userTeamId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="tid") //외래키
    private Team tid;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="uid")
    private Member uid;
}
