import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSelectedDate, getSelectedMonth } from "../../redux/selectors/dates";
import { createDaysOfWeeks } from "../../helpers/datesHelper";
import { setSelectedDate } from "../../redux/actions/dates";
import MonthCalendar from "../monthCalendar";

const Calendar = () => {
  const dispatch = useDispatch();
  const { selectedDay, selectedMonth } = useSelector((state) => ({
    selectedDay: getSelectedDate(state),
    selectedMonth: getSelectedMonth(state),
  }));
  let calendar = createDaysOfWeeks(selectedMonth);
  const handleChangeSelectedDay = (day) => {
    dispatch(setSelectedDate(day));
  };

  return (
    <MonthCalendar
      calendar={calendar}
      selectedDay={selectedDay}
      handleChangeSelectedDay={handleChangeSelectedDay}
    />
  );
};

export default Calendar;
