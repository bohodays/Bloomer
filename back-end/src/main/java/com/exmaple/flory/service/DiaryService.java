package com.exmaple.flory.service;

import com.exmaple.flory.dto.comment.CommentDto;
import com.exmaple.flory.dto.comment.CommentListDto;
import com.exmaple.flory.dto.diary.DiaryDayDto;
import com.exmaple.flory.dto.diary.DiaryDto;
import com.exmaple.flory.dto.diary.DiaryRequestDto;
import com.exmaple.flory.dto.flower.FlowerEmotionDto;
import com.exmaple.flory.dto.member.MemberResponseDto;
import com.exmaple.flory.dto.team.TeamDto;
import com.exmaple.flory.entity.*;
import com.exmaple.flory.exception.CustomException;
import com.exmaple.flory.exception.error.ErrorCode;
import com.exmaple.flory.repository.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.text.SimpleDateFormat;
import java.util.*;

@Service
@Slf4j
public class DiaryService {
    @Autowired
    private MusicRepository musicRepository;
    @Autowired
    private TeamRepository teamRepository;
    @Autowired
    private DiaryTeamRepository diaryTeamRepository;
    @Autowired
    private EmotionRepository emotionRepository;
    @Autowired
    private FlowerRepository flowerRepository;
    @Autowired
    private GardenRepository gardenRepository;
    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private DiaryRepository diaryRepository;

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private CommentService commentService;

    @Autowired
    private UserTeamRepository userTeamRepository;

    @Transactional
    public DiaryDto insertDiary(DiaryRequestDto diaryRequestDto) throws Exception {
        Diary diary = diaryRequestDto.toEntity();

        Optional<Garden> garden = gardenRepository.findById(diaryRequestDto.getGid());
        Optional<Flower> flower = flowerRepository.findById(diaryRequestDto.getFid());
        Optional<Music> music = musicRepository.findById(diaryRequestDto.getMid());

        if(garden.isEmpty()) throw new CustomException(ErrorCode.INVALID_GARDEN);
        if(flower.isEmpty()) throw new CustomException(ErrorCode.NO_FLOWER);
        if(music.isEmpty()) throw new CustomException(ErrorCode.NO_MUSIC);

        Flower flowerData = flower.get();

        diary.setGarden(garden.get());
        diary.setFlower(flowerData);
        diary.setMusic(music.get());
        diary.setX("0");
        diary.setY("0");
        diary.setZ("0");

        DiaryDto result = diaryRepository.save(diary).toDto();
        result.setFlowerEmotion(getFlowerEmotion(flowerData));
        result.setMusic(music.get());

        if(diaryRequestDto.getPublicStatus().equals("그룹공개")){
            List<Long> groups = diaryRequestDto.getGroupList();

            for(int i=0;i<groups.size();i++){
                DiaryTeam diaryTeam = DiaryTeam.builder()
                        .groupId(groups.get(i)).diaryId(result.getId()).build();
                diaryTeamRepository.save(diaryTeam);
            }

            List<Team> groupList = new ArrayList<>();
            List<TeamDto> groupResult = new ArrayList<>();

            for(Long id: diaryRequestDto.getGroupList()){
                Optional<Team> team = teamRepository.findById(id);

                if(team.isEmpty()) throw new CustomException(ErrorCode.INVALID_TEAM);

                groupList.add(team.get());
            }

            for(Team team: groupList){
                groupResult.add(TeamDto.of(team));
            }

            result.setGroupList(groupResult);
        }

        return result;
    }

    public DiaryDto getDiary(Long diaryId) throws Exception {
        Optional<Diary> diary = diaryRepository.findById(diaryId);

        if(diary.isEmpty()){
            throw new CustomException(ErrorCode.NO_DIARY);
        }

        DiaryDto result = diary.get().toDto();
        result.setFlowerEmotion(getFlowerEmotion(diary.get().getFlower()));
        result.setCommentList(getCommentList(result));
        result.setMusic(diary.get().getMusic());

        if(result.getPublicStatus().equals("그룹공개")){
            setGroupList(result);
        }

        return result;
    }

    @Transactional
    public int deleteDiary(Long diary_id){
        Optional<Diary> diary = diaryRepository.findById(diary_id);

        if(diary.isPresent()){
            diaryRepository.delete(diary.get());
            return 1;
        }
        else{
            throw new CustomException(ErrorCode.NO_DIARY);
        }
    }

    @Transactional
    public DiaryDto updateDiary(DiaryRequestDto diaryDto) throws Exception{
        Optional<Diary> dir = diaryRepository.findById(diaryDto.getId());

        if(dir.isEmpty()) throw new CustomException(ErrorCode.NO_DIARY);

        Optional<Garden> garden = gardenRepository.findById(diaryDto.getGid());
        Optional<Flower> flower = flowerRepository.findById(diaryDto.getFid());
        Optional<Music> music = musicRepository.findById(diaryDto.getMid());

        if(garden.isEmpty()) throw new CustomException(ErrorCode.INVALID_GARDEN);
        if(flower.isEmpty()) throw new CustomException(ErrorCode.NO_FLOWER);
        if(music.isEmpty()) throw new CustomException(ErrorCode.NO_MUSIC);

        Diary diary = dir.get();
        log.info("Diary: {}",diary);

        setUpdateDiary(diaryDto,diary);


        diary.setGarden(garden.get());
        diary.setFlower(flower.get());
        diary.setMusic(music.get());

        log.info("Update Diary: {}",diary);

        if(diary.getPublicStatus().equals("그룹공개")){
            diaryTeamRepository.deleteByDid(diaryDto.getId());
            log.info("삭제");

            List<Long> groups = diaryDto.getGroupList();

            for(int i=0;i<groups.size();i++){
                log.info("{}",groups.get(i));
                DiaryTeam diaryTeam = DiaryTeam.builder()
                        .groupId(groups.get(i)).diaryId(diary.getId()).build();
                diaryTeamRepository.save(diaryTeam);
            }
        }

        DiaryDto result = diaryRepository.save(diary).toDto();
        log.info("update: {}",result);
        log.info("createTime: {}",dir.get());

        result.setCreatedTime(dir.get().getCreatedTime());
        result.setCommentList(getCommentList(result));
        result.setFlowerEmotion(getFlowerEmotion(flower.get()));
        result.setMusic(music.get());
        setGroupList(result);

        return result;
    }

    public List<DiaryDto> getDiaryListByGarden(Long gardenId, Long requestId) throws Exception {

        Optional<Garden> garden = gardenRepository.findById(gardenId);
        List<Diary> diaryList;
        if(garden.isEmpty()) throw new CustomException(ErrorCode.INVALID_GARDEN);

        log.info("생성자:{}, 요청:{}",garden.get().getMember().getUserId(),requestId);

        if(garden.get().getMember().getUserId().equals(requestId)){ //정원 생성자와 요청한 사람이 동일하다면
            diaryList = diaryRepository.findByGardenId(gardenId);//공개여부와 상관없이 정원의 모든 일기 목록 가져오기
        }
        else{ //정원 생성자와 요청한 사람이 다르다면
            diaryList = diaryRepository.findPublicByGardenId(gardenId);//먼저 전체공개로 설정한 일기 목록을 가져온다
            List<Diary> diaries = diaryRepository.findTeamByGardenId(gardenId);//그룹공개로 설정한 일기 목록을 우선 가져온다
            log.info("diaries: {}",diaries);

            for(int i=0;i<diaries.size();i++){
                log.info("result: {}",isInTeam(diaries.get(i).getId(),requestId));
                if(isInTeam(diaries.get(i).getId(),requestId)){ //요청한 사람이 그룹 내에 있는 사람이라면
                    diaryList.add(diaries.get(i));
                }
            }
        }

        List<DiaryDto> diaryDtoList = new ArrayList<>();

        for(int i=0;i<diaryList.size();i++){
            Diary diary = diaryList.get(i);

            DiaryDto diaryDto = diary.toDto();
            diaryDto.setFlowerEmotion(getFlowerEmotion(diary.getFlower()));
            diaryDto.setCommentList(getCommentList(diaryDto));
            diaryDto.setMusic(diary.getMusic());
            setGroupList(diaryDto);

            if(diary.getPublicStatus().equals("그룹공개")){
                setGroupList(diaryDto);
            }

            diaryDtoList.add(diaryDto);
        }

        return diaryDtoList;
    }

    public List<DiaryDto> getDiaryListByUser(Long memberId, Long requestId) throws Exception {

        List<Diary> diaryList = getDiaryListInUser(memberId, requestId);
        List<DiaryDto> diaryDtoList = new ArrayList<>();

        for(int i=0;i<diaryList.size();i++){
            DiaryDto diaryDto = diaryList.get(i).toDto();
            diaryDto.setCommentList(getCommentList(diaryDto));
            diaryDto.setFlowerEmotion(getFlowerEmotion(diaryList.get(i).getFlower()));
            setGroupList(diaryDto);
            diaryDto.setMusic(diaryList.get(i).getMusic());
            diaryDtoList.add(diaryDto);
        }

        return diaryDtoList;
    }

    public List<DiaryDto> getDiaryListInMap(Map<String, String> info) throws Exception {
        double lat1 = Double.parseDouble(info.get("lat1"));
        double lng1 = Double.parseDouble(info.get("lng1"));
        double lat2 = Double.parseDouble(info.get("lat2"));
        double lng2 = Double.parseDouble(info.get("lng2"));
        Long requestId = Long.parseLong(info.get("requestId"));

        List<Diary> diaryList = diaryRepository.findDiaryInMap(lat1,lng1,lat2,lng2);
        List<DiaryDto> result= new ArrayList<>();

        for(Diary diary: diaryList){
            log.info("{}",diary);
            if(diary.getGarden().getMember().getUserId().equals(requestId)){
                DiaryDto diaryDto = diary.toDto();

                diaryDto.setFlowerEmotion(getFlowerEmotion(diary.getFlower()));
                diaryDto.setMusic(diary.getMusic());
                setGroupList(diaryDto);
                diaryDto.setCommentList(getCommentList(diaryDto));
                result.add(diaryDto);
            }

            else{
                if(diary.getPublicStatus().equals("전체공개")){
                    DiaryDto diaryDto = diary.toDto();

                    diaryDto.setFlowerEmotion(getFlowerEmotion(diary.getFlower()));
                    diaryDto.setMusic(diary.getMusic());
                    setGroupList(diaryDto);

                    result.add(diaryDto);
                }
                else if(diary.getPublicStatus().equals("그룹공개")){
                    if(isInTeam(diary.getId(),requestId)){
                        DiaryDto diaryDto = diary.toDto();

                        diaryDto.setFlowerEmotion(getFlowerEmotion(diary.getFlower()));
                        diaryDto.setMusic(diary.getMusic());
                        setGroupList(diaryDto);

                        result.add(diaryDto);
                    }
                }
            }
        }

        return result;
    }

    public DiaryDto getDiaryByLocation(Map<String, String> info) throws Exception {
        Long gardenId = Long.parseLong(info.get("gardenId"));
        String x = info.get("x");
        String y = info.get("y");
        String z = info.get("z");

        Diary diary = diaryRepository.findByXAndYAndZInGarden(gardenId, x,y,z);

        if(diary!=null){
            DiaryDto diaryDto = diary.toDto();
            List<CommentListDto> comments = commentService.getCommentList(diaryDto.getId());

            diaryDto.setCommentList(comments);
            diaryDto.setFlowerEmotion(getFlowerEmotion(diary.getFlower()));
            diaryDto.setMusic(diary.getMusic());
            setGroupList(diaryDto);

            return diaryDto;
        }

        return null;
    }

    public List<DiaryDayDto> getDiaryInMonth(Long memberId, String year, String month) throws Exception{
        List<DiaryDayDto> diaryDayDtoList = new ArrayList<>();

        String first = year.concat("-"+month+"-01 00:00:00");
        String last;
        switch (month){
            case "1":
            case "3":
            case "5":
            case "7":
            case "8":
            case "10":
            case "12":
                last = year.concat("-"+month+"-31 23:59:59");
                break;
            case "2":
                last = year.concat("-"+month+"-28 23:59:59");
                break;
            default:
                last = year.concat("-"+month+"-30 23:59:59");
                break;
        }

        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

        Date firstDay = formatter.parse(first);
        Date lastDay = formatter.parse(last);

        List<Diary> diaryList = diaryRepository.findDiaryInMonth(memberId, firstDay,lastDay);

        for(Diary diary : diaryList){
            Date createdTime = diary.getCreatedTime();
            boolean flag = true;

            String day = formatter.format(createdTime);
            day = day.substring(8,10);

            for(DiaryDayDto diaryDayDto: diaryDayDtoList){
                if(diaryDayDto.getDay().equals(day)){
                    flag = false;
                    List<DiaryDto> diaries = diaryDayDto.getDiaryList();
                    DiaryDto diaryDto = diary.toDto();
                    diaryDto.setCommentList(getCommentList(diaryDto));
                    diaryDto.setMusic(diary.getMusic());
                    diaryDto.setFlowerEmotion(getFlowerEmotion(diary.getFlower()));
                    setGroupList(diaryDto);
                    diaries.add(diaryDto);

                    diaryDayDto.setDiaryList(diaries);
                    break;
                }
            }

            if(flag){
                List<DiaryDto> diaryList1 = new ArrayList<>();
                DiaryDto diaryDto = diary.toDto();
                diaryDto.setCommentList(getCommentList(diaryDto));
                diaryDto.setMusic(diary.getMusic());
                diaryDto.setFlowerEmotion(getFlowerEmotion(diary.getFlower()));
                setGroupList(diaryDto);
                diaryList1.add(diaryDto);
                DiaryDayDto data = DiaryDayDto.builder()
                        .day(day).diaryList(diaryList1).build();

                diaryDayDtoList.add(data);
            }
        }

        return diaryDayDtoList;
    }

    public List<CommentListDto> getCommentList(DiaryDto diaryDto) throws Exception{
        List<CommentListDto> comments = new ArrayList<>();
        List<Comment> commentList = commentRepository.findByDid(diaryDto.getId());

        for(int i=0;i<commentList.size();i++){
            CommentDto commentDto = commentList.get(i).toDto();
            Optional<Member> member = memberRepository.findById(commentDto.getUid());

            if(member.isEmpty()) throw new CustomException(ErrorCode.NO_USER);

            CommentListDto commentListDto = CommentListDto.builder()
                    .id(commentDto.getId()).member(MemberResponseDto.of(member.get())).content(commentDto.getContent()).createdTime(commentDto.getCreatedTime()).build();

            comments.add(commentListDto);
        }

        return comments;
    }

    public FlowerEmotionDto getFlowerEmotion(Flower flowerData) throws Exception{
        Long emotionId = flowerRepository.getEmotionKey(flowerData.getId()).get(0);

        Optional<Emotion> emotion = emotionRepository.findById(emotionId);

        if(emotion.isEmpty()) throw new CustomException(ErrorCode.NO_EMOTION);

        FlowerEmotionDto flowerEmotionDto = FlowerEmotionDto.builder()
                .fid(flowerData.getId()).eid(emotionId).flowerName(flowerData.getName()).language(flowerData.getLanguage())
                .largeCategory(emotion.get().getLargeCategory()).smallCategory(flowerData.getSmallCategory()).build();

        return flowerEmotionDto;
    }

    public boolean isInTeam(Long diaryId, Long memberId){
        List<Long> groupList = diaryTeamRepository.getGroup(diaryId);
        log.info("groupList: {}",groupList);
        Optional<Member> member = memberRepository.findById(memberId);
        if(member.isEmpty()) return false;

        List<UserTeam> teamList = userTeamRepository.findAllByUidAndStatus(member.get(), 1);

        for(int i=0;i<teamList.size();i++) {
            if(groupList.contains(teamList.get(i).getTid().getTeamId())){
                return true;
            }
        }

        return false;
    }

    public List<Diary> getDiaryListInUser(Long memberId, Long requestId){
        List<Diary> diaryList;

        if(memberId.equals(requestId)){
            return diaryRepository.findByMemberId(memberId);
        }
        else{
            diaryList = diaryRepository.findPublicByMemberId(memberId);
            List<Diary> diaries = diaryRepository.findTeamByMemberId(memberId);

            for(int i=0;i<diaries.size();i++){
                if(isInTeam(diaries.get(i).getId(),requestId)){ //요청한 사람이 그룹 내에 있는 사람이라면
                    diaryList.add(diaries.get(i));
                }
            }
        }

        return diaryList;
    }

    public void setGroupList(DiaryDto diaryDto){
        List<Long> groupIdList = diaryTeamRepository.getGroup(diaryDto.getId());

        List<Team> groupList = new ArrayList<>();
        List<TeamDto> groupResult = new ArrayList<>();

        for(Long id: groupIdList){
            Optional<Team> team = teamRepository.findById(id);

            if(team.isEmpty()) continue;

            groupList.add(team.get());
        }

        for(Team team: groupList){
            groupResult.add(TeamDto.of(team));
        }

        diaryDto.setGroupList(groupResult);
    }

    public void setUpdateDiary(DiaryRequestDto diaryRequestDto, Diary diary){
        diary.setPublicStatus(diaryRequestDto.getPublicStatus());
        diary.setX(diaryRequestDto.getX());
        diary.setY(diaryRequestDto.getY());
        diary.setZ(diaryRequestDto.getZ());
        diary.setLat(diaryRequestDto.getLat());
        diary.setLng(diaryRequestDto.getLng());
        diary.setContent(diaryRequestDto.getContent());
        diary.setImgSrc(diaryRequestDto.getImgSrc());
        diary.setAddress(diaryRequestDto.getAddress());

    }
}
