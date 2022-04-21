import { combineReducers } from "redux";

import Booklist from "./bookreducer";
import Userlist from "./userreducer";


const Mainreducer = combineReducers({
    Booklist , Userlist
})

export default Mainreducer;
