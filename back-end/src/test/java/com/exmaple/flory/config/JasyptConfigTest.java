package com.exmaple.flory.config;

import org.jasypt.encryption.pbe.StandardPBEStringEncryptor;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;


@ExtendWith(SpringExtension.class)
@SpringBootTest
public class JasyptConfigTest {

    @Test
    public void checkEncString() {
        StandardPBEStringEncryptor spe = new StandardPBEStringEncryptor();
        spe.setAlgorithm("PBEWithMD5AndDES");
        spe.setPassword("cksgnlcjswo");
        System.out.println("jwt header = " + spe.encrypt("Authorization"));
        System.out.println("hwt secret = " + spe.encrypt("c2lsdmVybmluZS10ZWNoLXNwcmluZy1ib290LWp3dC10dXRvcmlhbC1zZWNyZXQtc2lsdmVybmluZS10ZWNoLXNwcmluZy1ib290LWp3dC10dXRvcmlhbC1zZWNyZXQK"));
        System.out.println("google cli-id = "+ spe.encrypt("610123170272-c3i1hroiufq8dpjr5u6k492e96duk3me.apps.googleusercontent.com"));
        System.out.println("google client-secret = " + spe.encrypt("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"));
        System.out.println("kakao cli-id = " + spe.encrypt("108092e3af473391fda7111e2ec5a078"));
        System.out.println("kakao redirect url = " + spe.encrypt("{baseUrl}/{action}/oauth2/code/{registrationId}"));
    }
}
