import {
  SET_SELECTED_DATE,
  SET_SELECTED_MONTH,
  FORWARD_MONTH,
  BACKWARD_MONTH,
  SET_SELECTED_CALENDAR_STATE,
} from "../action-types/dates";
import * as m from "moment";
import { MONTH } from "../../constants/calendarStatuses";

m.updateLocale("en", {
  week: {
    dow: 1,
  },
});

const initialState = {
  selectedDate: m().clone(),
  selectedMonth: m().clone().startOf("month"),
  selectedCalendarState: MONTH,
};

export const datesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SELECTED_DATE: {
      return { ...state, selectedDate: payload };
    }
    case SET_SELECTED_MONTH: {
      return { ...state, selectedMonth: payload };
    }
    case SET_SELECTED_CALENDAR_STATE: {
      return { ...state, selectedCalendarState: payload };
    }
    
    case FORWARD_MONTH: {
      const updatedMonth = state.selectedMonth
        .clone()
        .add(1, "month")
        .startOf("month");
      return {
        ...state,
        selectedMonth: updatedMonth,
      };
    }
    case BACKWARD_MONTH: {
      const updatedMonth = state.selectedMonth
      .clone()
      .subtract(1, "month")
      .startOf("month");
    return {
      ...state,
      selectedMonth: updatedMonth,
    };
    }
    default:
      return state;
  }
};
