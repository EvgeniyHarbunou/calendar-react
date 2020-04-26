import {
  SET_SELECTED_DATE,
  SET_SELECTED_MONTH,
  FORWARD_CALENDAR,
  BACKWARD_CALENDAR,
  FORWARD_MONTH,
  BACKWARD_MONTH,
  SET_SELECTED_CALENDAR_STATE,
  SET_SELECTED_WEEK,
} from "../action-types/dates";

export const setSelectedDate = (date) => ({
  type: SET_SELECTED_DATE,
  payload: date,
});
export const setSelectedMonth = (month) => ({
  type: SET_SELECTED_MONTH,
  payload: month,
});
export const setSelectedWeek = (week)=>({
  type: SET_SELECTED_WEEK,
  payload: week,
})
export const setSelectedCalendarState = (calendarState) => ({
  type: SET_SELECTED_CALENDAR_STATE,
  payload: calendarState,
});
export const forwardCalendar = () => ({
  type: FORWARD_CALENDAR,
});
export const backwardCalendar = () => ({
  type: BACKWARD_CALENDAR,
});
export const forwardMonth = () => ({
  type: FORWARD_MONTH,
});
export const backwardMonth = () => ({
  type: BACKWARD_MONTH,
});
