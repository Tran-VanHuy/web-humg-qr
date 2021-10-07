import * as types from "./type";

export const getListFaculty = (data) => ({
  type: types.GET_FACULTY_LIST,
  payload: data,
});

export const getListFacultySuccess = (data) => ({
  type: types.GET_FACULTY_LIST_SUCCESS,
  payload: data,
});

export const getListFacultyFail = (data) => ({
  type: types.GET_FACULTY_LIST_FAIL,
  payload: data,
});

export const postListFaculty = (data) => ({
  type: types.POST_FACULTY_LIST,
  payload: data,
});

export const postListFacultySuccess = (data) => ({
  type: types.POST_FACULTY_LIST_SUCCESS,
  payload: data,
});

export const postListFacultyFail = (data) => ({
  type: types.POST_FACULTY_LIST_FAIL,
  payload: data,
});

export const getFilterListFaculty = (data) => (
  {
  type: types.GET_FILTER_FACULTY_LIST,
  payload: data,
});

export const getFilterListFacultySuccess = (data) => ({
  type: types.GET_FILTER_FACULTY_LIST_SUCCESS,
  payload: data,
});

export const getFilterListFacultyFail = (data) => ({
  type: types.GET_FACULTY_LIST_FAIL,
  payload: data,
});

export const deleteListFaculty = (data) => ({
  type: types.DELETE_FACULTY_LIST,
  payload: data,
});

export const deleteListFacultySuccess = (data) => ({
  type: types.DELETE_FACULTY_LIST_SUCCESS,
  payload: data,
});

export const deleteListFail = (data) => ({
  type: types.DELETE_FACULTY_LIST_FAIL,
  payload: data,
});

