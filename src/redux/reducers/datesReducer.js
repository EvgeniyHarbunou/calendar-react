import {
  SET_SELECTED_DATE,
  SET_SELECTED_MONTH,
  FORWARD_CALENDAR,
  BACKWARD_CALENDAR,
  BACKWARD_MONTH,
  FORWARD_MONTH,
  SET_SELECTED_CALENDAR_STATE,
  SET_SELECTED_WEEK,
  SET_EVENT,
} from "../action-types/dates";
import * as m from "moment";
import { MONTH, WEEK, DAY } from "../../constants/calendarStatuses";

m.updateLocale("en", {
  week: {
    dow: 1,
  },
});

const initialState = {
  selectedDate: m().clone(),
  selectedMonth: m().clone().startOf("month"),
  selectedWeek: m().clone().startOf("week"),
  events: [],
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
    case SET_SELECTED_WEEK: {
      return { ...state, selectedWeek: payload };
    }
    case SET_SELECTED_CALENDAR_STATE: {
      return { ...state, selectedCalendarState: payload };
    }

    case FORWARD_CALENDAR: {
      switch (state.selectedCalendarState) {
        case MONTH: {
          const updatedMonth = state.selectedMonth
            .clone()
            .add(1, "month")
            .startOf("month");
          return {
            ...state,
            selectedMonth: updatedMonth,
          };
        }
        case WEEK: {
          const updatedWeek = state.selectedWeek
            .clone()
            .add(1, "week")
            .startOf("week");
          return {
            ...state,
            selectedWeek: updatedWeek,
          };
        }
        case DAY: {
          const updatedDay = state.selectedDate
            .clone()
            .add(1, "day")
            .startOf("day");
          return {
            ...state,
            selectedDate: updatedDay,
          };
        }
        default: {
          return;
        }
      }
    }
    case BACKWARD_CALENDAR: {
      switch (state.selectedCalendarState) {
        case MONTH: {
          const updatedMonth = state.selectedMonth
            .clone()
            .subtract(1, "month")
            .startOf("month");
          return {
            ...state,
            selectedMonth: updatedMonth,
          };
        }
        case WEEK: {
          const updatedWeek = state.selectedWeek
            .clone()
            .subtract(1, "week")
            .startOf("week");
          return {
            ...state,
            selectedWeek: updatedWeek,
          };
        }
        case DAY: {
          const updatedDay = state.selectedDate
            .clone()
            .subtract(1, "day")
            .startOf("day");
          return {
            ...state,
            selectedDate: updatedDay,
          };
        }
        default: {
          return;
        }
      }
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
    case SET_EVENT: {
      return {
        ...state,
        events: [...state.events, payload],
      };
    }
    default:
      return state;
  }
};
