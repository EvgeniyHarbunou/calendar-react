import { combineReducers } from "redux";
import { datesReducer } from "./datesReducer";
import { modalReducer } from "./modalReducer";

export const rootReducer = combineReducers({
    dates: datesReducer,
    modal: modalReducer,
});
