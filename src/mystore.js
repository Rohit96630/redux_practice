import { createStore } from "redux";

import Mainreducer from "./reducer/mainreducer";

const Mystore = createStore(Mainreducer);

export default Mystore;