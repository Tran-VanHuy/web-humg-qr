import { put, takeLatest } from "@redux-saga/core/effects";
import * as types from "./type"
import * as actios from "./action"
import axios from "axios"
import { URL_WP } from "../../utils/urpapi";

function * getNews({payload}){
      

      try {
            
            const res = yield axios.get(`${URL_WP}/wp-json/wp/v2/posts`)
            if (res) {
                  yield put(actios.getNewsSuccess(res.data))
            }
      } catch (error) {
            yield put(actios.getNewsFail(error))
      }
}

function * getNewsLatest(){

      try {
            
            const res = yield axios.get(`${URL_WP}/wp-json/wp/v2/posts?categories=2`)
            if (res) {
                  yield put(actios.getNewsLatestSuccess(res.data))
            }
      } catch (error) {
            yield put(actios.getNewsLatestFail(error))
      }
}


function * filterNews({payload}){

      try {
            
            const res = yield axios.get(`${URL_WP}/wp-json/wp/v2/posts?slug=${payload}`)
            if (res) {
                  yield put(actios.filterNewsSucss(res.data))
            }
      } catch (error) {
            yield put(actios.filterNewsFail(error))
      }
}


export function * watchingNews(){

      yield takeLatest(types.GET_NEWS, getNews)
      yield takeLatest(types.FILTER_NEWS, filterNews)
      yield takeLatest(types.GET_NEWS_LATEST, getNewsLatest)
}