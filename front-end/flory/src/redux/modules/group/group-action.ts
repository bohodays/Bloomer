import { createAsyncThunk } from "@reduxjs/toolkit"
import { GroupCreateType } from "../../../models/Group/groupCreateType"
import { axiosInitializer } from "../../utils/axiosInitializer"
import { localData } from "../user/token"

// 토큰으로 내 그룹 목록 가져오기
export const getGroupInfoAction = createAsyncThunk(
  "MY_GROUP_LIST",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const accessToken = localData.getAccessToken()
      const axios = axiosInitializer()
      const { data } = await axios.get(`/api/team/member`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      return data
    } catch (e: any) {
      // dispatch(updateAccessToken());
      return rejectWithValue(e)
    }
  }
)

export const createGroupAction = createAsyncThunk(
  "CREATE_GROUP",
  async (groupCreateData: GroupCreateType, { rejectWithValue }) => {
    console.log("받은 데이터", groupCreateData)

    try {
      const accessToken = localData.getAccessToken()
      const axios = axiosInitializer()
      const { data } = await axios.post(`/api/team`, groupCreateData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      return data
    } catch (e) {
      return rejectWithValue(e)
    }
  }
)

export const getAllGroupAction = createAsyncThunk(
  "GET_ALL_GROUP",
  async (_, { rejectWithValue }) => {
    try {
      const accessToken = localData.getAccessToken()
      const axios = axiosInitializer()
      const { data } = await axios.get(`/api/team/all`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      return data.response
    } catch (e: any) {
      return rejectWithValue(e)
    }
  }
)

export const getAllGroupByKeywordAction = createAsyncThunk(
  "GET_ALL_GROUP_BY_KEYWORD",
  async (keyword: string, { rejectWithValue }) => {
    try {
      const accessToken = localData.getAccessToken()
      const axios = axiosInitializer()
      const { data } = await axios.get(
        `/api/team/all/search?keyword=${keyword}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      return data.response
    } catch (e) {
      rejectWithValue(e)
    }
  }
)
