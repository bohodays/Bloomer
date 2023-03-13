package com.exmaple.flory.repository;

import com.exmaple.flory.config.TestConfig;
import com.exmaple.flory.entity.Member;
import com.exmaple.flory.entity.Team;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(SpringExtension.class)
@DataJpaTest
@Import(TestConfig.class)
@TestPropertySource("classpath:application-test.properties")
class TeamRepositoryTest {

    @Autowired
    TeamRepository teamRepository;

    @DisplayName("팀 저장")
    @Test
    void save(){
        //given
        Team team = Team.builder().name("name").build();

        //when
        Team result = teamRepository.save(team);

        //then
        assertThat(result.getName()).isEqualTo(team.getName());
    }

    @DisplayName("팀 조회")
    @Test
    void findById(){
        //given
        Team team = Team.builder().name("name").build();
        Team entity = teamRepository.save(team);

        //when
        Team result = teamRepository.findById(entity.getTeamId())
                .orElseThrow(() -> new RuntimeException("팀 정보가 없습니다."));

        //then
        assertThat(result.getName()).isEqualTo(team.getName());

    }

    @DisplayName("팀 삭제")
    @Test
    void delete(){
        //given
        Team team = Team.builder().name("name").build();
        Team entity = teamRepository.save(team);

        //when
        teamRepository.delete(team);
        Optional<Team> result = teamRepository.findById(entity.getTeamId());

        //then
        assertThat(result).isEqualTo(Optional.empty());
    }

}