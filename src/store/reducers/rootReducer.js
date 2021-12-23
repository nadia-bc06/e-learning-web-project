import { combineReducers } from "redux";
import courseReducer from "./courseReducer";
import userReducer from './userReducer';

const rootReducer = combineReducers({
    courseReducer,
    userReducer
});

export default rootReducer;