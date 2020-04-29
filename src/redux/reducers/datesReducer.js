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
  events: [
    {
      name: 'meeting 1',
      description: 'goodMeeting',
      startDate: m().clone().startOf('day'),
      endDate: m().clone().startOf('day').add(1, 'hour'),
    },
    {
      name: 'meeting mitt',
      description: 'goodMeeting',
      startDate: m().clone().startOf('day').add(1, 'hour').add(25, 'minute'),
      endDate: m().clone().startOf('day').add(2, 'hour'),
    },
    {
      name: 'meeting 3',
      description: 'goodMeeting',
      startDate: m().clone().startOf('day').add(2, 'hour'),
      endDate: m().clone().startOf('day').add(3, 'hour'),
    },
    {
      name: 'meeting 4',
      description: 'goodMeeting',
      startDate: m().clone().startOf('day').add(3, 'hour'),
      endDate: m().clone().startOf('day').add(4, 'hour'),
    },
    {
      name: 'meeting 4',
      description: 'goodMeeting',
      startDate: m().clone().startOf('day').add(4, 'hour'),
      endDate: m().clone().startOf('day').add(5, 'hour'),
    },
    {
      name: 'meeting 4',
      description: 'goodMeeting',
      startDate: m().clone().startOf('day').add(7, 'hour'),
      endDate: m().clone().startOf('day').add(8, 'hour'),
    },
    {
      name: 'meeting 4',
      description: 'goodMeeting',
      startDate: m().clone().startOf('day').add(9, 'hour'),
      endDate: m().clone().startOf('day').add(10, 'hour'),
    },
    {
      name: 'meetingdddd 2',
      description: 'goodMeeting',
      startDate: m().clone().add(1, 'hour').add(30, 'minutes'),
      endDate: m().clone().add(3, 'hour'),
    },
    {
      name: 'meeting 3',
      description: 'goodMeeting',
      startDate: m().clone().startOf('day').add(4, 'hour'),
      endDate: m().clone().startOf('day').add(5, 'hour'),
    },
    {
      name: 'meeting and',
      description: 'goodMeeting',
      startDate: m().clone().startOf('day').add(2, 'day'),
      endDate: m().clone().startOf('day').add(2, 'day').add(1, 'hour'),
    },


  ],
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
      const events = state.events;
      events.forEach((event) => {
        if (
          payload.startDate.isBetween(event.startDate, event.endDate) ||
          payload.startDate.isBetween(event.startDate, event.endDate) || 
          payload.startDate.isSame(event.startDate)
        ) {
          throw new Error("This event crosses with anoter event");
        }
      });
      return {
        ...state,
        events: [...state.events, payload],
      };
    }
    default:
      return state;
  }
};
