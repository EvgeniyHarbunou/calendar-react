import { SET_SELECTED_DATE, SET_SELECTED_MONTH } from "../action-types/dates";
import * as m from "moment";

m.updateLocale("en", {
    week: {
      dow: 1,
    },
  });

const initialState = {
  selectedDate: m().clone(),
  selectedMonth: m().clone().startOf('month'),
};

export const datesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SELECTED_DATE: {
      return { ...state, selectedDate: payload };
    }
    case SET_SELECTED_MONTH: {
        return { ...state, selectedMonth: payload };
      }
    default:
      return state;
  }
};
