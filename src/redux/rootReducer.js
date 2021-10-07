import { combineReducers } from "redux";
import {bannerReducer} from "./Banner/reducer"
import {facultyReducer} from "./FacultyList/reducer"
import {videoReucer} from "./Video/reducer"
import {newRuducer} from "./News/reducer"
import {userReducer} from "./Login/reducer"

const rootReducer = combineReducers({
    
      bannerReducer,
      facultyReducer,
      videoReucer,
      newRuducer, 
      userReducer
});

export default rootReducer;
