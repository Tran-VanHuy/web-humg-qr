import * as types from "./type"

export const getListVideo = () => ({

      type : types.GET_LIST_VIDEO
})

export const getListVideoSuccess = (data) => ({

      type : types.GET_LIST_VIDEO_SUCCESS,
      payload : data
})

export const getListVideoFail = (data) => ({

      type : types.GET_LIST_VIDEO_FAIL,
      payload : data
})
