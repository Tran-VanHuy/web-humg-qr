import * as types from "./type";

export const getNews = (data) => ({
  type: types.GET_NEWS,
  payload: data
});

export const getNewsSuccess = (data) => ({
  type: types.GET_NEWS_SUCCESS,
  payload: data,
});

export const getNewsFail = (data) => ({
  type: types.GET_NEWS_FAIL,
  payload: data,
});

export const getNewsLatest = (data) => ({
  type: types.GET_NEWS_LATEST,
  payload: data
});

export const getNewsLatestSuccess = (data) => ({
  type: types.GET_NEWS_LATEST_SUCCESS,
  payload: data,
});

export const getNewsLatestFail = (data) => ({
  type: types.GET_NEWS_LATEST_FAIL,
  payload: data,
});

export const filterNews = (data) => ({
  type: types.FILTER_NEWS,
  payload: data
});

export const filterNewsSucss = (data) => ({
  type: types.FILTER_NEWS_SUCCESS,
  payload: data,
});

export const filterNewsFail = (data) => ({
  type: types.GET_NEWS_FAIL,
  payload: data,
});

