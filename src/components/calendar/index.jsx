import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getSelectedDate,
  getSelectedMonth,
  getSelectedCalendarState,
  getSelectedWeek,
  getEvents,
} from "../../redux/selectors/dates";
import { MONTH, WEEK, DAY } from "../../constants/calendarStatuses";
import {
  createDaysOfWeeksForMonth,
  createDaysOfWeek,
  createHoursOfDay,
} from "../../helpers/datesHelper";
import { setSelectedDate } from "../../redux/actions/dates";
import MonthCalendar from "../monthCalendar";
import WeekCalendar from "../weekCalendar";
import DayCalendar from "../dayCalendar";
import { addEventsToMonthCalendar } from "../../helpers/eventsHelper";
import { tablesSize } from "../../constants/tableSize";

const Calendar = () => {
  const dispatch = useDispatch();
  const {
    selectedDay,
    selectedMonth,
    calendarState,
    selectedWeek,
    events,
  } = useSelector((state) => ({
    selectedDay: getSelectedDate(state),
    selectedMonth: getSelectedMonth(state),
    selectedWeek: getSelectedWeek(state),
    calendarState: getSelectedCalendarState(state),
    events: getEvents(state),
  }));
  const calendar = createDaysOfWeeksForMonth(selectedMonth);
  // const calendarWithEvents = addEventsToMonthCalendar(calendar, selectedMonth, events);
  const weekCalendarList = createDaysOfWeek(selectedWeek);
  const dayCalendarList = createHoursOfDay(selectedDay);
  const handleChangeSelectedDay = (day) => {
    dispatch(setSelectedDate(day));
  };

  if (calendarState === MONTH)
    return (
      <MonthCalendar
        calendar={calendar}
        size={tablesSize.DEFAULT}
        selectedDay={selectedDay}
        selectedMonth={selectedMonth}
        handleChangeSelectedDay={handleChangeSelectedDay}
        isShowEvents={true}
      />
    );
  else if (calendarState === WEEK)
    return (
      <WeekCalendar
        weekCalendarList={weekCalendarList}
        selectedDay={selectedDay}
        selectedMonth={selectedMonth}
        handleChangeSelectedDay={handleChangeSelectedDay}
      />
    );
  else if (calendarState === DAY)
    return (
      <DayCalendar
        dayCalendarList={dayCalendarList}
        selectedDay={selectedDay}
        selectedMonth={selectedMonth}
      />
    );
};

export default Calendar;
