import { NavItem } from "react-bootstrap";
import * as types from "./type";

const initialState = {
  dataFaculty: [],
  dataFilterFaculty: [],
  loading: false,
};

export const facultyReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_FACULTY_LIST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_FACULTY_LIST_SUCCESS:
      return {
        ...state,
        ...{ dataFaculty: action.payload, loading: false },
      };

    case types.GET_FACULTY_LIST_FAIL:
      return {
        ...state,
        ...{ dataFaculty: [], loading: false },
      };

    case types.POST_FACULTY_LIST:
      return {
        ...state,
        loading: true,
      };
    case types.POST_FACULTY_LIST_SUCCESS:
      return {
        ...state,
        dataFaculty: [...state.dataFaculty, action.payload],
        ...{ loading: false },
      };

    case types.POST_FACULTY_LIST_FAIL:
      return {
        ...state,
        ...{ dataFaculty: [], loading: false },
      };

    case types.GET_FILTER_FACULTY_LIST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_FILTER_FACULTY_LIST_SUCCESS:
      return {
        ...state,
        ...{ dataFilterFaculty: action.payload, loading: false },
      };

    case types.GET_FILTER_FACULTY_LIST_FAIL:
      return {
        ...state,
        ...{ dataFilterFaculty: [], loading: false },
      };

      case types.DELETE_FACULTY_LIST:
        return {
          ...state,
          loading: true,
        };
      case types.DELETE_FACULTY_LIST_SUCCESS:
        return {
          ...state,
          dataFaculty : state.dataFaculty.filter(item => item._id !== action.payload),
          loading: false
        };
  
      case types.DELETE_FACULTY_LIST_FAIL:
        return {
          ...state,
          ...{ dataFilterFaculty: [], loading: false },
        };

    default:
      return state;
  }
};
