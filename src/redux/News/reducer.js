import * as types from "./type";

const initialState = {
  dataNews: [],
  dataFilterNews: [],
  dataNewsLatest: [],
  loading: false,
};

export const newRuducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_NEWS:
      return {
        ...state,
        loading: true,
      };
    case types.GET_NEWS_SUCCESS:
      return {
        ...state,
        ...{ dataNews: action.payload, loading: false },
      };

    case types.GET_NEWS_FAIL:
      return {
        ...state,
        ...{ dataNews: [], loading: false },
      };

      case types.GET_NEWS_LATEST:
        return {
          ...state,
          loading: true,
        };
      case types.GET_NEWS_LATEST_SUCCESS:
        return {
          ...state,
          ...{ dataNewsLatest: action.payload, loading: false },
        };
  
      case types.GET_NEWS_LATEST_FAIL:
        return {
          ...state,
          ...{ dataNewsLatest: [], loading: false },
        };

    case types.FILTER_NEWS:
      return {
        ...state,
        loading: true,
      };
    case types.FILTER_NEWS_SUCCESS:
      return {
        ...state,
        ...{ dataFilterNews: action.payload, loading: false },
      };

    case types.FILTER_NEWS_FAIL:
      return {
        ...state,
        ...{ dataFilterNews: [], loading: false },
      };

    default:
      return state;
  }
};
