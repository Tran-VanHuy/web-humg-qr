import { all, call } from "redux-saga/effects";
import { watchingGetListBanner } from "./Banner/saga";
import { watchingGetListFaculty } from "./FacultyList/saga";
import { watchingNews } from "./News/saga";
import { watchingVideo } from "./Video/saga";


// call saga nào thfi định nghĩa ở đây nhé
export default function* rootSaga() {
    yield all([
     
       call(watchingGetListBanner),
       call(watchingGetListFaculty),
       call(watchingVideo),
       call(watchingNews)
    ]);
}
