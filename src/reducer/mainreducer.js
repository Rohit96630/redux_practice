import { combineReducers } from "redux";

import Booklist from "./bookreducer";
import Userlist from "./userreducer";
import ApiDataList from "./apireducer";


const Mainreducer = combineReducers({
    Booklist , Userlist, ApiDataList
})

export default Mainreducer;
