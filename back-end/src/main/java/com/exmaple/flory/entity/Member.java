package com.exmaple.flory.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "member")
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Member extends BaseTime {

    @Id
    @Column(name = "user_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

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

    @Column(name = "classic")
    private Boolean classic;
    @Column(name="jazz")
    private Boolean jazz;

    @Column(name="pop")
    private Boolean pop;

    @Column(name="reggae")
    private Boolean reggae;

    @Column(name="RnB")
    private Boolean RnB;

    @Column(name="electronic")
    private Boolean electronic;

    @Enumerated(EnumType.STRING)
    private Authority authority;

    public Member updateToken(String refreshToken) {
        this.refreshToken = refreshToken;
        return this;
    }

    public Member updateMember(String nickname){ //, String password, PasswordEncoder passwordEncoder
        this.nickname = nickname;
//        this.password = passwordEncoder.encode(password);
        return this;
    }

    public Member updateImg(String img){
        this.img = img;
        return this;
    }

    @JsonIgnore
    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<Comment> commentList;
}