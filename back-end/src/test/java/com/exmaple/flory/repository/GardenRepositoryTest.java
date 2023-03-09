package com.exmaple.flory.repository;

import com.exmaple.flory.config.TestConfig;
import com.exmaple.flory.entity.Garden;
import com.exmaple.flory.entity.Member;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@ExtendWith(SpringExtension.class)
@DataJpaTest
@Import(TestConfig.class)
@TestPropertySource("classpath:application-test.properties")
public class GardenRepositoryTest {

    @Autowired
    private GardenRepository gardenRepository;

    @Autowired
    private MemberRepository memberRepository;

    @DisplayName("garden 레포지토리에 저장하기")
    @Test
    public void GardenRepositorySaveTest() {

        Member member = Member
                .builder()
                .userId(1L)
                .email("cksgnlcjswoo@naver.ocm")
                .password("1234")
                .nickname("abcd")
                .build();

        Garden garden = Garden
                .builder()
                .member(member)
                .path("/usr/app")
                .build();

        memberRepository.save(member);
        Garden result = gardenRepository.save(garden);

        assertThat(result.getMember().getUserId()).isEqualTo(member.getUserId());
        assertThat(result.getMember().getEmail()).isEqualTo(member.getEmail());
    }
}
