package com.exmaple.flory.handler;

import com.exmaple.flory.dto.member.TokenDto;
import com.exmaple.flory.dto.oauth.OAuthAttributes;
import com.exmaple.flory.entity.Member;
import com.exmaple.flory.jwt.TokenProvider;
import com.exmaple.flory.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Optional;

@Slf4j
@RequiredArgsConstructor
@Component
public class Oauth2SuccessHandler implements AuthenticationSuccessHandler {

    private final TokenProvider jwtTokenProvider;
    private final MemberRepository memberRepository;

    @Value("${social.login.redirectUrl}")
    private String redirectUrl;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {

        OAuthAttributes oAuthAttributes = (OAuthAttributes) authentication.getPrincipal();

        TokenDto tokenDto = jwtTokenProvider.createTokenDto(authentication);

        log.info("social login user email: {} ",oAuthAttributes.getEmail());
        log.info("access token:: {} ",tokenDto.getAccessToken());
        log.info("refresh token: {}", tokenDto.getRefreshToken());

        Optional<Member> member = memberRepository.findByEmail(oAuthAttributes.getEmail());

        Long userId = member.get().getUserId();
        int newUser = 0;
        //새로 등록한 유저
        if(member.get().getPop() == null) {
            member.get().updateRefreshToken(tokenDto.getRefreshToken());
            newUser = 1;
        }

        StringBuilder sb = new StringBuilder();
        sb.append(redirectUrl).append("?refreshToken=")
                .append(tokenDto.getRefreshToken())
                .append("&&accessToken=")
                .append(tokenDto.getAccessToken())
                .append("&&userId=")
                .append(userId)
                .append("&&newUser=")
                .append(newUser);

        response.sendRedirect(sb.toString());



    }
}
