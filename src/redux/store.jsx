import {createStore , applyMiddleware} from "redux";
import {logger} from "redux-logger";
import rootReducer from "./root-reducer";

const mddilewares = [logger];
const store = createStore(rootReducer , applyMiddleware(...mddilewares));
export default store;
