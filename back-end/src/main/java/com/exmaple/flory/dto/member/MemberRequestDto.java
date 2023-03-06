package com.exmaple.flory.dto.member;

import com.exmaple.flory.entity.Authority;
import com.exmaple.flory.entity.Member;
import lombok.*;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MemberRequestDto {

    @NotNull
    @Size(min = 1, max = 20)
    private String nickname;

    @NotNull
    @Size(min = 5, max = 50)
    private String password;

    @NotNull
    private String img;

    @NotNull
    @Size(min = 10, max = 100)
    private String email;

    public Member toMember(PasswordEncoder passwordEncoder) {
        return Member.builder()
                .nickname(nickname)
                .img(img)
                .email(email)
                .password(passwordEncoder.encode(password))
                .authority(Authority.ROLE_USER)
                .build();
    }

    public UsernamePasswordAuthenticationToken toAuthentication() {
        return new UsernamePasswordAuthenticationToken(email, password);
    }
}
