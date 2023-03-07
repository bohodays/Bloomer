package com.exmaple.flory.controller;

import com.exmaple.flory.dto.diary.DiaryDto;
import com.exmaple.flory.exception.error.ErrorCode;
import com.exmaple.flory.response.ErrorResponse;
import com.exmaple.flory.response.SuccessResponse;
import com.exmaple.flory.service.DiaryService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/diary")
@Slf4j
public class DiaryController {
    @Autowired
    DiaryService diaryService;

    @PostMapping
    public ResponseEntity<?> insert(@RequestBody DiaryDto diaryDto){
        try{
            DiaryDto result = diaryService.insertDiary(diaryDto);
            return new ResponseEntity<>(new SuccessResponse(result), HttpStatus.OK);
        }catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INTERNAL_SERVER_ERROR), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{diaryId}")
    public ResponseEntity<?> getDiary(@PathVariable Long diaryId){
        try{
            DiaryDto diaryDto = diaryService.getDiary(diaryId);
            return new ResponseEntity<>(new SuccessResponse(diaryDto),HttpStatus.OK);
        }catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INTERNAL_SERVER_ERROR),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{diaryId}")
    public ResponseEntity<?> deleteDiary(@PathVariable Long diaryId){
        try{
            int result = diaryService.deleteDiary(diaryId);

            if(result==1) return new ResponseEntity<>(new SuccessResponse("삭제가 완료되었습니다."),HttpStatus.OK);
            else throw new Exception();
        }catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INTERNAL_SERVER_ERROR),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping
    public ResponseEntity<?> updateDiary(@RequestBody DiaryDto diaryDto){
        try{
            DiaryDto result = diaryService.updateDiary(diaryDto);
            return new ResponseEntity<>(new SuccessResponse(result),HttpStatus.OK);
        }catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INTERNAL_SERVER_ERROR),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

//    @GetMapping("/list/{gardenId}")
//    public ResponseEntity<?> getDiaryListGarden(@PathVariable Long gardenId){
//        try{
//            List<DiaryDto> result = diaryService.getDiaryListGarden(gardenId);
//            return new ResponseEntity<>(new SuccessResponse(result),HttpStatus.OK);
//        }catch (Exception e){
//            e.printStackTrace();
//            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INTERNAL_SERVER_ERROR),HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }

//    @GetMapping("/diary-list/{userId}")
//    public ResponseEntity<?> getDiaryListUser(@PathVariable Long userId){
//        try{
//            List<DiaryDto> result = diaryService.getDiaryListUser(userId);
//            return new ResponseEntity<>(new SuccessResponse(result),HttpStatus.OK);
//        }catch (Exception e){
//            e.printStackTrace();
//            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INTERNAL_SERVER_ERROR),HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }

    @GetMapping
    public ResponseEntity<?> getDiaryByLocation(@RequestParam String x, @RequestParam String y,@RequestParam String z){
        try{
            DiaryDto diaryDto = diaryService.getDiaryByLocation(x,y,z);
            return new ResponseEntity<>(new SuccessResponse(diaryDto),HttpStatus.OK);
        }catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INTERNAL_SERVER_ERROR),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
