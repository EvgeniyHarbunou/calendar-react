import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import { Day } from "../day";
import { daysOfWeek } from "../../constants/calendarConstants";
import { getSelectedDate, getSelectedMonth } from "../../redux/selectors/dates";
import { createDaysOfWeeks } from "../../helpers/datesHelper";
import styles from "./style.module.scss";
import { setSelectedDate } from "../../redux/actions/dates";

const MonthCalendar = () => {
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
    <table className={styles["month-table"]}>
      <thead>
        <tr>
          {daysOfWeek.map((day) => (
            <th className={styles["table-head"]} key={day}>
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={styles["table-body"]}>
        {calendar.map((week) => (
          <tr key={week.week}>
            {week.days.map((day) => (
              <td
                onClick={
                  day.isSame(selectedMonth, "month")
                    ? () => handleChangeSelectedDay(day)
                    : ()=>{}
                }
                key={day}
                className={classNames(
                  day.isSame(selectedDay, "date") ? styles["current-day"] : "",
                  day.isSame(selectedMonth, "month")
                    ? ""
                    : styles["month-outside"]
                )}
              >
                <Day day={day} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MonthCalendar;
