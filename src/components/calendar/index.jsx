import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getSelectedDate,
  getSelectedMonth,
  getSelectedCalendarState,
  getSelectedWeek,
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
import { tablesSize } from "../../constants/tableSize";

const Calendar = () => {
  const dispatch = useDispatch();
  const {
    selectedDay,
    selectedMonth,
    calendarState,
    selectedWeek,
  } = useSelector((state) => ({
    selectedDay: getSelectedDate(state),
    selectedMonth: getSelectedMonth(state),
    selectedWeek: getSelectedWeek(state),
    calendarState: getSelectedCalendarState(state),
  }));
  let calendar = createDaysOfWeeksForMonth(selectedMonth);
  let weekCalendarList = createDaysOfWeek(selectedWeek);
  let dayCalendarList = createHoursOfDay(selectedDay);
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
