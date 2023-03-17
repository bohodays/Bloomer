package com.exmaple.flory.service;

import com.exmaple.flory.dto.comment.CommentListDto;
import com.exmaple.flory.dto.diary.DiaryDto;
import com.exmaple.flory.dto.diary.DiaryRequestDto;
import com.exmaple.flory.dto.flower.FlowerEmotionDto;
import com.exmaple.flory.entity.*;
import com.exmaple.flory.repository.*;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.*;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(SpringExtension.class)
public class DiaryServiceTest {

    @InjectMocks
    DiaryService diaryService;

    @Mock
    CommentService commentService;

    @Mock
    DiaryRepository diaryRepository;

    @Mock
    CommentRepository commentRepository;

    @Mock
    GardenRepository gardenRepository;

    @Mock
    FlowerRepository flowerRepository;

    @Mock
    EmotionRepository emotionRepository;

    @Mock
    MemberRepository memberRepository;

    @Mock
    DiaryTeamRepository diaryTeamRepository;

    @Mock
    UserTeamRepository userTeamRepository;

    private final Member member = Member
            .builder()
            .userId(1L)
            .email("ssafy@naver.com")
            .password("1234")
            .nickname("abcd")
            .build();

    private final Garden garden = Garden
            .builder()
            .member(member)
            .path("/usr/app")
            .build();

    private final Emotion emotion = Emotion.builder()
            .id(1L).type("type").build();

    private final Flower flower = Flower.builder()
            .id(1L).name("flower").language("language").emotion(emotion).build();

    private final FlowerEmotionDto flowerEmotionDto = FlowerEmotionDto.builder()
            .fid(1L).eid(1L).emotion(emotion.getType()).flowerName(flower.getName()).language(flower.getLanguage()).build();

    private final DiaryDto diaryDto = DiaryDto.builder()
            .id(1L).content("content").imgSrc("imgSrc").lat("lat").lng("lng").publicStatus("전체공개").x("x").y("y").z("z")
            .flowerEmotion(flowerEmotionDto).build();

    private final Comment comment = Comment.builder()
            .id(1L).diary(diaryDto.toEntity()).member(member).content("content").build();

    private final Team team = Team.builder()
            .teamId(1L).name("name").build();

    private final UserTeam userTeam = UserTeam.builder()
            .userTeamId(1L).tid(team).uid(member).build();
    @DisplayName("일기 등록하기 테스트")
    @Test
    public void insertDiaryTest() throws Exception {
        List<Long> info = new ArrayList<>();
        info.add(emotion.getId());

        when(diaryRepository.save(any())).thenReturn(diaryDto.toEntity());
        when(gardenRepository.findById(any())).thenReturn(Optional.ofNullable(garden));
        when(flowerRepository.findById(any())).thenReturn(Optional.ofNullable(flower));
        when(flowerRepository.getEmotionKey(any())).thenReturn(info);
        when(emotionRepository.findById(any())).thenReturn(Optional.of(emotion));

        DiaryRequestDto diaryRequestDto = DiaryRequestDto.builder()
                .content(diaryDto.getContent()).x(diaryDto.getX()).y(diaryDto.getY()).z(diaryDto.getZ()).publicStatus("전체공개").build();

        DiaryDto result = diaryService.insertDiary(diaryRequestDto);

        assertEquals(diaryDto.getContent(),result.getContent());
    }

    @DisplayName("일기 상세내용 가져오기 테스트")
    @Test
    public void getDiaryTest() throws Exception{
        List<Long> info = new ArrayList<>();
        info.add(emotion.getId());

        Diary diary = diaryDto.toEntity();
        diary.setFlower(flower);
        diary.setGarden(garden);

        when(diaryRepository.findById(any())).thenReturn(Optional.of(diary));
        when(flowerRepository.findById(any())).thenReturn(Optional.ofNullable(flower));
        when(flowerRepository.getEmotionKey(any())).thenReturn(info);
        when(emotionRepository.findById(any())).thenReturn(Optional.of(emotion));

        DiaryDto result = diaryService.getDiary(diaryDto.getId());

        assertEquals(diaryDto.getContent(),result.getContent());
    }

    @DisplayName("일기 삭제하기 테스트")
    @Test
    public void deleteDiaryTest(){
        when(diaryRepository.findById(any())).thenReturn(Optional.ofNullable(diaryDto.toEntity()));

        int result = diaryService.deleteDiary(diaryDto.getId());

        assertEquals(1,result);
    }

    @DisplayName("일기 수정하기 테스트")
    @Test
    public void updateDiaryTest() throws Exception {
        DiaryRequestDto diaryRequestDto = DiaryRequestDto.builder()
                .content(diaryDto.getContent()).x(diaryDto.getX()).y(diaryDto.getY()).z(diaryDto.getZ()).build();
        List<Long> emotions = new ArrayList<>();
        emotions.add(emotion.getId());

        when(diaryRepository.findById(any())).thenReturn(Optional.ofNullable(diaryDto.toEntity()));
        when(diaryRepository.save(any())).thenReturn(diaryDto.toEntity());
        when(gardenRepository.findById(any())).thenReturn(Optional.ofNullable(garden));
        when(flowerRepository.findById(any())).thenReturn(Optional.ofNullable(flower));
        when(flowerRepository.getEmotionKey(any())).thenReturn(emotions);
        when(emotionRepository.findById(any())).thenReturn(Optional.of(emotion));

        DiaryDto result = diaryService.updateDiary(diaryRequestDto);

        assertEquals(diaryDto.getContent(),result.getContent());
    }

    @DisplayName("해당 정원의 일기 목록 조회 테스트")
    @Test
    public void getDiaryByGardenTest() throws Exception{
        List<Diary> diaryList = new ArrayList<>();
        List<Long> info = new ArrayList<>();
        info.add(emotion.getId());

        Diary diary = diaryDto.toEntity();
        diary.setFlower(flower);
        diary.setGarden(garden);
        diaryList.add(diary);

        when(diaryRepository.findById(any())).thenReturn(Optional.of(diary));
        when(flowerRepository.findById(any())).thenReturn(Optional.ofNullable(flower));
        when(flowerRepository.getEmotionKey(any())).thenReturn(info);
        when(emotionRepository.findById(any())).thenReturn(Optional.of(emotion));
        when(diaryRepository.findByGardenId(any())).thenReturn(diaryList);
        when(gardenRepository.findById(any())).thenReturn(Optional.ofNullable(garden));

        List<DiaryDto> result = diaryService.getDiaryListByGarden(1L,1L);

        assertEquals(result.size(),diaryList.size());
    }

    @DisplayName("유저의 일기 목록 조회 테스트")
    @Test
    public void getDiaryByMemberTest() throws Exception{
        List<Diary> diaryDtoList = new ArrayList<>();

        diaryDtoList.add(diaryDto.toEntity());
        when(diaryRepository.findByMemberId(any())).thenReturn(diaryDtoList);

        List<DiaryDto> result = diaryService.getDiaryListByUser(1L,1L);

        assertEquals(result.size(),diaryDtoList.size());
    }

    @DisplayName("지도 범위 내의 일기 목록 조회 테스트")
    @Test
    public void getDiaryInMapTest() throws Exception {
        List<Diary> diaries = new ArrayList<>();
        Map<String,String> info = new HashMap<>();

        info.put("lat1","1");
        info.put("lng1","1");
        info.put("lat2","1");
        info.put("lng2","1");
        info.put("requestId","1");

        diaries.add(diaryDto.toEntity());

        when(diaryRepository.findDiaryInMap(any(),any(),any(),any())).thenReturn(diaries);

        List<DiaryDto> result = diaryService.getDiaryListInMap(info);

        assertEquals(diaries.size(),result.size());
    }

    @DisplayName("좌표값으로 일기 조회 테스트")
    @Test
    public void getDiaryByLocationTest() throws Exception{
        when(diaryRepository.findByXAndYAndZInGarden(any(),any(),any(),any())).thenReturn(diaryDto.toEntity());
        when(commentService.getCommentList(any())).thenReturn(new ArrayList<>());

        Map<String,String> info = new HashMap<>();

        info.put("gardenId","1");
        info.put("x","10");
        info.put("y","10");
        info.put("z","10");

        DiaryDto result = diaryService.getDiaryByLocation(info);

        assertEquals(diaryDto.getContent(),result.getContent());
    }

    @DisplayName("댓글 목록 가져오기 테스트")
    @Test
    public void getCommentListTest() throws Exception {
        List<Comment> comments = new ArrayList<>();

        comments.add(comment);
        when(commentRepository.findByDid(any())).thenReturn(comments);
        when(memberRepository.findById(any())).thenReturn(Optional.ofNullable(member));

        List<CommentListDto> commentList = diaryService.getCommentList(diaryDto);

        assertEquals(commentList.size(),comments.size());
    }

    @DisplayName("팀 소속 여부 확인 테스트")
    @Test
    public void isInTeamTest(){
        List<Long> groupList = new ArrayList<>();
        groupList.add(1L);

        List<UserTeam> userTeams = new ArrayList<>();
        userTeams.add(userTeam);

        when(diaryTeamRepository.getGroup(any())).thenReturn(groupList);
        when(memberRepository.findById(any())).thenReturn(Optional.ofNullable(member));
        when(userTeamRepository.findAllByUid(any())).thenReturn(userTeams);

        boolean result = diaryService.isInTeam(1L,1L);

        assertTrue(result);
    }

    @DisplayName("사용자의 일기 목록 가져오기 테스트")
    @Test
    public void getDiaryListInUserTest(){
        List<Diary> diaries = new ArrayList<>();
        diaries.add(diaryDto.toEntity());

        when(diaryRepository.findPublicByMemberId(any())).thenReturn(diaries);
        when(diaryRepository.findTeamByMemberId(any())).thenReturn(diaries);

        List<Diary> result = diaryService.getDiaryListInUser(1L,2L);

        assertEquals(result.size(),diaries.size());
    }
}
