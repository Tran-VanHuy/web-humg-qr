import * as types from "./type";

const initialState = {
  dataInfo: [],

  loading: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        loading: true,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        ...{ dataInfo: action.payload, loading: false },
      };

    case types.LOGIN_FAIL:
      return {
        ...state,
        ...{ dataInfo: [], loading: false },
      };

    default:
      return state;
  }
};
