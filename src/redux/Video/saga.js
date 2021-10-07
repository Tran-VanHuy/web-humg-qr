import * as types from "./type"
import * as actions from "./action"
import axios from "axios"
import {put, takeLatest} from "@redux-saga/core/effects"
import { URL_API } from "../../utils/urpapi"

function * getVideo(){

      try {
           
            const res = yield axios.get(`${URL_API}/videointroduce`)
            if(res){

                  yield put(actions.getListVideoSuccess(res.data))
            }
            else{

                  yield put(actions.getListVideoFail("fail"))
            }
      } catch (error) {
            yield put(actions.getListVideoFail(error))
      }
}

export function * watchingVideo(){

      yield takeLatest(types.GET_LIST_VIDEO, getVideo)
}