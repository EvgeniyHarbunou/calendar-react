import { combineReducers } from "redux";
import { datesReducer } from "./datesReducer";

export const rootReducer = combineReducers({
    dates: datesReducer,
});
