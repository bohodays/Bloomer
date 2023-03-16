package com.exmaple.flory.service;

import com.exmaple.flory.dto.comment.CommentDto;
import com.exmaple.flory.dto.comment.CommentListDto;
import com.exmaple.flory.dto.diary.DiaryDayDto;
import com.exmaple.flory.dto.diary.DiaryDto;
import com.exmaple.flory.dto.diary.DiaryRequestDto;
import com.exmaple.flory.dto.flower.FlowerEmotionDto;
import com.exmaple.flory.entity.*;
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

        if(garden.isEmpty() || flower.isEmpty()) throw new Exception();

        Flower flowerData = flower.get();

        diary.setGarden(garden.get());
        diary.setFlower(flowerData);

        DiaryDto result = diaryRepository.save(diary).toDto();
        result.setFlowerEmotion(getFlowerEmotion(flowerData));

        if(diaryRequestDto.getPublicStatus().equals("그룹공개")){
            List<Long> groups = diaryRequestDto.getGroupList();

            for(int i=0;i<groups.size();i++){
                DiaryTeam diaryTeam = DiaryTeam.builder()
                        .groupId(groups.get(i)).diaryId(result.getId()).build();
                diaryTeamRepository.save(diaryTeam);
            }
        }

        return result;
    }

    public DiaryDto getDiary(Long diaryId) throws Exception {
        Optional<Diary> diary = diaryRepository.findById(diaryId);

        if(diary.isEmpty()){
            throw new Exception();
        }

        DiaryDto result = diary.get().toDto();
        result.setFlowerEmotion(getFlowerEmotion(diary.get().getFlower()));
        result.setCommentList(getCommentList(result));

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
            return 0;
        }
    }

    @Transactional
    public DiaryDto updateDiary(DiaryRequestDto diaryDto) throws Exception{
        Optional<Diary> d = diaryRepository.findById(diaryDto.getId());
        if(d.isEmpty()) throw new Exception();

        Diary diary = d.get();
        log.info("수정: {}",diary);
        Optional<Garden> garden = gardenRepository.findById(diaryDto.getGid());
        Optional<Flower> flower = flowerRepository.findById(diaryDto.getFid());

        if(garden.isEmpty() || flower.isEmpty()) throw new Exception();

        diary.setGarden(garden.get());
        diary.setFlower(flower.get());

        DiaryDto result = diaryRepository.save(diary).toDto();
        result.setCommentList(getCommentList(result));
        result.setFlowerEmotion(getFlowerEmotion(flower.get()));

        return result;
    }

    public List<DiaryDto> getDiaryListByGarden(Long gardenId, Long requestId) throws Exception {

        Optional<Garden> garden = gardenRepository.findById(gardenId);
        List<Diary> diaryList;
        if(garden.isEmpty()) throw new Exception();

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
            DiaryDto diaryDto = diaryList.get(i).toDto();
            diaryDto.setFlowerEmotion(getFlowerEmotion(diaryList.get(i).getFlower()));
            diaryDto.setCommentList(getCommentList(diaryDto));
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
            diaryDtoList.add(diaryDto);
        }

        return diaryDtoList;
    }

    public List<DiaryDto> getDiaryListInMap(Map<String, String> info){
        double lat1 = Double.parseDouble(info.get("lat1"));
        double lng1 = Double.parseDouble(info.get("lng1"));
        double lat2 = Double.parseDouble(info.get("lat2"));
        double lng2 = Double.parseDouble(info.get("lng2"));
        Long requestId = Long.parseLong(info.get("requestId"));


        List<Diary> diaryList = diaryRepository.findDiaryInMap(lat1,lng1,lat2,lng2);
        List<DiaryDto> result= new ArrayList<>();

        for(int i=0;i<diaryList.size();i++){
            Diary diary = diaryList.get(i);

            if(diary.getGarden().getMember().getUserId().equals(requestId)){
                result.add(diary.toDto());
            }

            else{
                if(diaryList.get(i).getPublicStatus().equals("전체공개")){
                    DiaryDto diaryDto = diaryList.get(i).toDto();
                    result.add(diaryDto);
                }
                else if(diaryList.get(i).getPublicStatus().equals("그룹공개")){
                    if(isInTeam(diaryList.get(i).getId(),requestId)){
                        DiaryDto diaryDto = diaryList.get(i).toDto();
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
                    diaryDto.setFlowerEmotion(getFlowerEmotion(diary.getFlower()));
                    diaries.add(diaryDto);

                    diaryDayDto.setDiaryList(diaries);
                    break;
                }
            }

            if(flag){
                List<DiaryDto> diaryList1 = new ArrayList<>();
                DiaryDto diaryDto = diary.toDto();
                diaryDto.setCommentList(getCommentList(diaryDto));
                diaryDto.setFlowerEmotion(getFlowerEmotion(diary.getFlower()));
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

            if(member.isEmpty()) throw new Exception();

            CommentListDto commentListDto = CommentListDto.builder()
                    .id(commentDto.getId()).member(member.get()).content(commentDto.getContent()).createdTime(commentDto.getCreatedTime()).build();

            comments.add(commentListDto);
        }

        return comments;
    }

    public FlowerEmotionDto getFlowerEmotion(Flower flowerData) throws Exception{
        Long emotionId = flowerRepository.getEmotionKey(flowerData.getId()).get(0);

        Optional<Emotion> emotion = emotionRepository.findById(emotionId);

        if(emotion.isEmpty()) throw new Exception();

        FlowerEmotionDto flowerEmotionDto = FlowerEmotionDto.builder()
                .fid(flowerData.getId()).eid(emotionId).flowerName(flowerData.getName()).language(flowerData.getLanguage())
                .largeCategory(emotion.get().getLargeCategory()).smallCategory(emotion.get().getSmallCategory()).build();

        return flowerEmotionDto;
    }

    public boolean isInTeam(Long diaryId, Long memberId){
        List<Long> groupList = diaryTeamRepository.getGroup(diaryId);
        log.info("groupList: {}",groupList);
        Optional<Member> member = memberRepository.findById(memberId);
        if(member.isEmpty()) return false;

        List<UserTeam> teamList = userTeamRepository.findAllByUid(member.get());

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
}
