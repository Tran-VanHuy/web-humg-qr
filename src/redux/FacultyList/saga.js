import { put, takeLatest } from "@redux-saga/core/effects";
import * as actions from "./action";
import * as types from "./type";
import axios from "axios";
import { URL_API } from "../../utils/urpapi";

function* getListFaculty() {
  try {
    const res = yield axios.get(`${URL_API}/posts/department&category=&page=1&per_page=5`);
    if (res) {
      yield put(actions.getListFacultySuccess(res.data));
    } else {
      yield put(actions.getListFacultyFail("fail"));
    }
  } catch (error) {
    yield put(actions.getListFacultyFail(error));
  }
}

function* getFilterListFaculty({payload}) {
  try {
    const res = yield axios.get(`${URL_API}/posts/department&category=${payload}&page=1&per_page=5`);
    if (res) {
      yield put(actions.getFilterListFacultySuccess(res.data));
    } else {
      yield put(actions.getFilterListFacultyFail("fail"));
    }
  } catch (error) {
    yield put(actions.getFilterListFacultyFail(error));
  }
}

function* postListFaculty({payload}) {

  try {
    const res = yield axios.post(`${URL_API}/posts/department&category=&page=1&per_page=5`, payload);
    if (res) {
      yield put(actions.postListFacultySuccess(res.data));
    } else {
      yield put(actions.postListFacultyFail("fail"));
    }
  } catch (error) {
    yield put(actions.postListFacultyFail(error));
  }
}

function* deleteListFaculty({payload}) {
  try {
    const res = yield axios.delete(`${URL_API}/posts/department&category=&page=1&per_page=5&${payload}`);
    if (res) {
      yield put(actions.deleteListFacultySuccess(payload));
    } else {
      yield put(actions.deleteListFail("fail"));
    }
  } catch (error) {
    yield put(actions.deleteListFail(error));
  }
}


export function* watchingGetListFaculty() {
  yield takeLatest(types.GET_FACULTY_LIST, getListFaculty);
  yield takeLatest(types.POST_FACULTY_LIST, postListFaculty);
  yield takeLatest(types.GET_FILTER_FACULTY_LIST, getFilterListFaculty);
  yield takeLatest(types.DELETE_FACULTY_LIST, deleteListFaculty);
}
