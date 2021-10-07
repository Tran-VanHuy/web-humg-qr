import { put, takeLatest, delay } from "@redux-saga/core/effects";
import * as types from "./type";
import * as actions from "./action";
import axios from "axios";
import { URL_API } from "../../utils/urpapi";

function* getListBanner({ payload }) {
  try {
    const res = yield axios.get(`${URL_API}/posts`);

    if (res) {
      yield put(actions.getBannerSuccess(res.data));
    } else {
      yield put(actions.getBannerFail("fail"));
    }
  } catch (error) {
    yield put(actions.getBannerFail(error));
  }
}


function* postListBanner({ payload }) {
  try {
    const res = yield axios.post(`${URL_API}/posts`, payload);
    if (res) {
      yield delay(1000);
      yield put(actions.postBannerSuccess(res.data));
    } else {
      yield put(actions.postBannerFail("fail"));
    }
  } catch (error) {
    yield put(actions.postBannerFail(error));
  }
}

function* deleteListBanner({ payload }) {
  try {
    const res = yield axios.delete(
      `${URL_API}/posts/delete/${payload}`
    );
    if (res.status === 200) {
      yield delay(1000);
      yield put(actions.deleteBannerSuccess(payload));
    } else {
      yield put(actions.deleteBannerFail("fail"));
    }
  } catch (error) {
    yield put(actions.deleteBannerFail(error));
  }
}

function* updateListBanner({ payload }) {
  try {
    const res = yield axios.put(
      `${URL_API}/posts/put/${payload._id}`,
      payload.info
    );

    if (res.status === 200) {
      yield put(actions.updateBannerSuccess(res.data));
    } else {
      yield put(actions.updateBannerFail("fail"));
    }
  } catch (error) {
    yield put(actions.updateBannerFail(error));
  }
}

export function* watchingGetListBanner() {
  yield takeLatest(types.GET_LIST_BANNER, getListBanner);
  yield takeLatest(types.POST_LIST_BANNER, postListBanner);
  yield takeLatest(types.DELETE_LIST_BANNER, deleteListBanner);
  yield takeLatest(types.UPDATE_LIST_BANNER, updateListBanner);
}
