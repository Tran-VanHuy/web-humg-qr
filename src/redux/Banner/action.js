import * as types from "./type";

export const getBanner = () => ({
  type: types.GET_LIST_BANNER,
});

export const getBannerSuccess = (data) => ({
  type: types.GET_LIST_BANNER_SUCCESS,
  payload: data,
});

export const getBannerFail = (data) => ({
  type: types.GET_LIST_BANNER_FAIL,
  payload: data,
});

export const postBanner = (data) => ({
  type: types.POST_LIST_BANNER,
  payload: data,
});

export const postBannerSuccess = (data) => ({
  type: types.POST_LIST_BANNER_SUCCESS,
  payload: data,
});

export const postBannerFail = (data) => ({
  type: types.POST_LIST_BANNER_FAIL,
  payload: data,
});

export const deleteBanner = (data) => ({
  type: types.DELETE_LIST_BANNER,
  payload: data,
});

export const deleteBannerSuccess = (data) => ({
  type: types.DELETE_LIST_BANNER_SUCCESS,
  payload: data,
});

export const deleteBannerFail = (data) => ({
  type: types.DELETE_LIST_BANNER_FAIL,
  payload: data,
});

export const updateBanner = (data) => ({
  type: types.UPDATE_LIST_BANNER,
  payload: data,
});

export const updateBannerSuccess = (data) => ({
  type: types.UPDATE_LIST_BANNER_SUCCESS,
  payload: data,
});

export const updateBannerFail = (data) => ({
  type: types.UPDATE_LIST_BANNER_FAIL,
  payload: data,
});
