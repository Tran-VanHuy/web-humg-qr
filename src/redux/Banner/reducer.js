import * as types from "./type";

const initialState = {
  dataBanner: [],
  postDataBanner: [],
  loading: false,
};

export const bannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_LIST_BANNER:
      return {
        ...state,
        loading: true,
      };
    case types.GET_LIST_BANNER_SUCCESS:
      return {
        ...state,
        ...{ dataBanner: action.payload, loading: false },
      };

    case types.GET_LIST_BANNER_FAIL:
      return {
        ...state,
        ...{ dataBanner: [], loading: false },
      };

    case types.POST_LIST_BANNER:
      return {
        ...state,
        loading: true,
      };
    case types.POST_LIST_BANNER_SUCCESS:
      return {
        ...state,
        dataBanner: [...state.dataBanner, action.payload],
        loading: false
      };

    case types.DELETE_LIST_BANNER:
      return {
        ...state,
        loading: true,
      };
    case types.DELETE_LIST_BANNER_SUCCESS:
      return {
        ...state,
        loading: false,
        dataBanner: state.dataBanner.filter(
          (item) => item._id !== action.payload
        ),
      };

    case types.UPDATE_LIST_BANNER:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_LIST_BANNER_SUCCESS:
      return {  
        ...state,
        loading: false
      }

    default:
      return state;
  }
};
