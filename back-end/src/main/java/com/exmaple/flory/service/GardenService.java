package com.exmaple.flory.service;

import com.exmaple.flory.dto.garden.GardenRequestDto;
import com.exmaple.flory.dto.garden.GardenResponseDto;
import com.exmaple.flory.entity.Garden;
import com.exmaple.flory.entity.Member;
import com.exmaple.flory.exception.CustomException;
import com.exmaple.flory.exception.error.ErrorCode;
import com.exmaple.flory.repository.GardenRepository;
import com.exmaple.flory.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class GardenService {

    private final GardenRepository gardenRepository;
    private final MemberRepository memberRepository;

    public GardenResponseDto getDetail(Long id) {

        return gardenRepository.findById(id)
                .map(Garden::toResponseDto)
                .orElseThrow(()-> new CustomException(ErrorCode.INVALID_GARDEN));
    }

    public GardenResponseDto insert(GardenRequestDto gardenRequestDto) {

        Long memberId = gardenRequestDto.getUserId();

        Optional<Member> member = memberRepository.findById(memberId);

        //계정이 없다면
        if(!member.isPresent()) throw new CustomException(ErrorCode.NO_USER);

        LocalDateTime today = LocalDateTime.now();

        Garden garden = new Garden();
        garden.setMember(member.get());
        //1개월뒤 마감날짜
        garden.setDeadLine(today.plusMonths(1));

        return gardenRepository.save(garden).toResponseDto();
    }
}
