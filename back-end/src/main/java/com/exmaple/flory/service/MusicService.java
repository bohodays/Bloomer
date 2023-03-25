package com.exmaple.flory.service;

import com.exmaple.flory.dto.music.MusicRecommendResponseDto;
import com.exmaple.flory.entity.Music;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
@Slf4j
public class MusicService {

    public List<MusicRecommendResponseDto> recommendMusic(Integer emotion,Long user_id) {

        List<MusicRecommendResponseDto> ret = new ArrayList<>();

        String[] emotions = {"joy","relax","embarrassment","rage","unrest","hurt","sad"};

        RestTemplate restTemplate = new RestTemplate();
        StringBuilder url = new StringBuilder();
        url.append("http://localhost:8000")
                .append("/domain/emotions/")
                .append(emotions[emotion]+"/")
                .append("near-user/")
                .append(user_id);

        log.info("request domain");
        String[] response = restTemplate.getForObject(url.toString(), String[].class);

        log.info("1번 : {}\n 2번: {} \n 3번:{}",response[0],response[1],response[2]);

        for(String str: response) {
            ret.add(MusicRecommendResponseDto.builder().title(str).build());
        }

        return ret;

    }
}
