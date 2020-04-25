import { SET_SELECTED_DATE } from "../action-types/dates";

export const setSelectedDate = (date) =>({
    type: SET_SELECTED_DATE,
    payload: date,
})
export const setSelectedMonth = (month) =>({
    type: SET_SELECTED_MONTH,
    payload: date,
})