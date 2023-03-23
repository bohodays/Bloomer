package com.exmaple.flory.service;

import com.exmaple.flory.dto.music.MusicRecommendResponseDto;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MusicService {

    public List<MusicRecommendResponseDto> recommendMusic(String emotion) {

        List<MusicRecommendResponseDto> ret = new ArrayList<>();

        ret.add(MusicRecommendResponseDto.builder().title("218-westernet-141021").build());
        ret.add(MusicRecommendResponseDto.builder().title("a-dark-night-141333").build());
        ret.add(MusicRecommendResponseDto.builder().title("a-jazz-piano-110481").build());
        ret.add(MusicRecommendResponseDto.builder().title("abstract-design-40978").build());
        ret.add(MusicRecommendResponseDto.builder().title("whip-110235").build());

        return ret;

    }
}
