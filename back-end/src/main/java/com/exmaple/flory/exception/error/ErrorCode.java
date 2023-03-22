package com.exmaple.flory.exception.error;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public enum ErrorCode {
    // common
    INVALID_INPUT(HttpStatus.METHOD_NOT_ALLOWED, "405", "기입되지 않은 정보가 있습니다"),
    INTERNAL_SERVER_ERROR(HttpStatus.INTERNAL_SERVER_ERROR, "500", "서버 내부 에러"),

    //garden
    INVALID_GARDEN(HttpStatus.NOT_FOUND,"404","없는 정원 정보입니다."),
    // user
    EMAIL_DUPLICATION(HttpStatus.CONFLICT, "409", "이미 존재하는 이메일입니다."),
    USER_DUPLICATION(HttpStatus.CONFLICT, "409", "이미 존재하는 사용자입니다."),
    NO_USER(HttpStatus.NOT_FOUND, "404", "없는 사용자입니다."),
    INVALID_PASSWORD(HttpStatus.BAD_REQUEST, "400", "비밀번호가 옳지 않습니다."),
    NO_LOGIN(HttpStatus.UNAUTHORIZED, "401", "로그인이 필요합니다"),

    //diary

    NO_DIARY(HttpStatus.NOT_FOUND,"404","요청한 일기가 없습니다."),
    NO_FLOWER(HttpStatus.NOT_FOUND,"404","없는 꽃입니다."),

    NO_COMMENT(HttpStatus.NOT_FOUND,"404","해당 댓글이 존재하지 않습니다."),

    NO_EMOTION(HttpStatus.NOT_FOUND,"404","해당 감정이 존재하지 않습니다."),

    NO_MUSIC(HttpStatus.NOT_FOUND,"404","없는 음악입니다."),

    //team
    INVALID_TEAM(HttpStatus.NOT_FOUND,"404","없는 그룹 정보입니다.");

    private HttpStatus httpStatus;
    private String code;
    private String message;
}
