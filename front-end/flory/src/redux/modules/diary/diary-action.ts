import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInitializer } from "../../utils/axiosInitializer";
import { dataReset } from "../diaryCreate/diaryCreate-slice";
import { localData } from "../user/token";

// 일기 생성
export const createDiaryAction = createAsyncThunk(
  "CREATE",
  async ({ diaryData, imgFile }: any, { rejectWithValue }) => {
    try {
      const accessToken = localData.getAccessToken();
      const axios = axiosInitializer();

      const formData: any = new FormData();
      const blob = new Blob([JSON.stringify(diaryData)], {
        type: "application/json",
      });
      formData.append("diary", blob);
      formData.append("imgSrc", imgFile);

      console.log(formData.get("imgSrc"));
      console.log(diaryData, imgFile);

      const { data } = await axios.post(`/api/diary`, formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(data, "일기 생성 요청 후 반환 값");

      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

// 일기 삭제
export const deleteDiaryAction = createAsyncThunk(
  "DELETE",
  async (diary_id: number, { rejectWithValue }) => {
    try {
      const accessToken = localData.getAccessToken();
      const axios = axiosInitializer();
      const { data } = await axios.delete(`/api/diary/${diary_id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("일기 삭제 완료", data);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

// 일기 수정
export const modifyDiaryAction = createAsyncThunk(
  "MODIFY",
  async (diaryData: any, { rejectWithValue }) => {
    try {
      const accessToken = localData.getAccessToken();
      const axios = axiosInitializer();

      const { data } = await axios.put(`/api/diary`, diaryData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      console.log(data, "일기 수정 요청 후 반환 값");

      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

// 수정된 꽃 위치 백엔드 API 연결해서 서버상에서도 위치 수정시키기
export const updatePositionAction = createAsyncThunk(
  "UPDATEPOSITION",
  async (diaryData: any, { rejectWithValue }) => {
    try {
      const accessToken = localData.getAccessToken();
      const axios = axiosInitializer();
      const { data } = await axios.put(
        `/api/diary/location`,
        { updateDiaries: diaryData },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

// 입력받은 텍스트를 통해 감정 도출
export const getEmotionAction = createAsyncThunk(
  "GETEMOTION",
  async (text: string | undefined, { rejectWithValue }) => {
    try {
      const accessToken = localData.getAccessToken();
      const axios = axiosInitializer();
      const { data } = await axios.post(
        `/api/diary/emotion`,
        { text },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(data, "감정분석");

      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

// 해당 정원의 일기 목록 조회
export const getDiaryListAction = createAsyncThunk(
  "GET_DIARYLIST",
  async (inputData: any, { rejectWithValue }) => {
    try {
      const accessToken = localData.getAccessToken();
      const axios = axiosInitializer();
      const { data } = await axios.get(
        `/api/diary/list/${inputData.gardenId}/${inputData.requestId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log("현재 일기 목록", data);

      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

// 전체 공개 일기 목록 가져오기
export const getAllDiary = createAsyncThunk(
  "GET_ALL_DIARY",
  async (_, { rejectWithValue }) => {
    try {
      const axios = axiosInitializer();
      const accessToken = localData.getAccessToken();
      const { data } = await axios.get("/api/diary/list/all", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(data);
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

// 년/월에 따른 일기 목록 가져오기
export const getDiaryWithDate = createAsyncThunk(
  "GET_DIARY_WITH_DATE",
  async (dateData: any, { rejectWithValue }) => {
    console.log("받은 데이터", dateData);

    try {
      const axios = axiosInitializer();
      const accessToken = localData.getAccessToken();
      const { data } = await axios.get(
        `/api/diary?id=${dateData.id}&year=${dateData.year}&month=${dateData.month}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log("api성공", data);
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

// 주변 일기 목록 가져오기
export const getDiaryWithMap = createAsyncThunk(
  "GET_DIARY_WITH_MAP",
  async (mapData: any, { rejectWithValue }) => {
    try {
      const axios = axiosInitializer();
      const accessToken = localData.getAccessToken();
      const { data } = await axios.post("/api/diary/map", mapData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log("현재 위치 일기 목록", data);
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

// 그룹 일기 목록 가져오기
export const getDiaryWithGroup = createAsyncThunk(
  "GET_DIARY_WITH_Group",
  async (teamIdList: any, { rejectWithValue }) => {
    try {
      const axios = axiosInitializer();
      const accessToken = localData.getAccessToken();
      const { data } = await axios.post("/api/diary/list/team", teamIdList, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

// 덧글 생성
export const createCommentAction = createAsyncThunk(
  "CREATE_COMMENT",
  async (commentData: any, { rejectWithValue }) => {
    try {
      const accessToken = localData.getAccessToken();
      const axios = axiosInitializer();
      const { data } = await axios.post(`/api/comment`, commentData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log("댓글 요청 보낸 데이터", commentData);

      console.log("댓글 생성 요청 후 받는 데이터", data);

      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const deleteCommentAction = createAsyncThunk(
  "DELETE_COMMENT",
  async (commentId: number, { rejectWithValue }) => {
    try {
      const accessToken = localData.getAccessToken();
      const axios = axiosInitializer();
      const { data } = await axios.delete(`/api/comment/${commentId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      console.log("댓글 삭제 요청 후 받는 데이터", data);
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

// 상세 일기 가져오기
export const getDetailDiary = createAsyncThunk(
  "GET_DETAIL",
  async (diaryId: number, { rejectWithValue }) => {
    try {
      const axios = axiosInitializer();
      const accessToken = localData.getAccessToken();
      const { data } = await axios.get(`/api/diary/${diaryId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log("디테일 데이터 가져오기", data);
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

//사용자의 작성했던 이번달 일기들의 감정 통계
export const getStatisticsMonth = createAsyncThunk(
  "GET_STATISTICES_MONTH",
  async (userId: any, { rejectWithValue }) => {
    try {
      const axios = axiosInitializer();
      const accessToken = localData.getAccessToken();
      const { data } = await axios.get(
        `/api/diary/statistics/month/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

//사용자의 작성했던 지난주 대비 일기들의 감정 통계
export const getStatisticsLastWeek = createAsyncThunk(
  "GET_STATISTICES_LAST_WEEK",
  async (userId: any, { rejectWithValue }) => {
    try {
      const axios = axiosInitializer();
      const accessToken = localData.getAccessToken();
      const { data } = await axios.get(`/api/diary/statistics/week/${userId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
