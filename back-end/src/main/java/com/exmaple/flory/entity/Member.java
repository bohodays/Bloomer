package com.exmaple.flory.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "member")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Member extends BaseTime {

    @Id
    @Column(name = "user_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;

    @Column(name = "nickname", length = 20, nullable = false)
    private String nickname;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "img")
    private String img;

    @Column(name="email", nullable = false)
    private String email;

    @Column(name="refresh_token")
    private String refreshToken;

    @Enumerated(EnumType.STRING)
    private Authority authority;

    public Member updateToken(String refreshToken) {
        this.refreshToken = refreshToken;
        return this;
    }

}