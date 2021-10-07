import * as types from "./type";

const INITIALSTATE = {
  dataVideo: [],
  loading: false,
};

export const videoReucer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case types.GET_LIST_VIDEO:
      return {
        ...state,
        loading: true,
      };
    case types.GET_LIST_VIDEO_SUCCESS:
      return {
        ...state,
        ...{ dataVideo: action.payload, loading: false },
      };
    case types.GET_LIST_VIDEO_FAIL:
      return {
        ...state,
        ...{ dataVideo: [], loading: false },
      };
    default:
      return state;
  }
};
