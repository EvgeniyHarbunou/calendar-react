import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { daysOfWeek } from "../../constants/calendarConstants";
import styles from "./styles.module.scss";

const WeekCalendar = ({
  handleChangeSelectedDay,
  weekCalendarList,
  selectedDay,
  selectedMonth,
}) => {
  return (
    <table className={styles["month-table"]}>
      <thead>
        <tr>
          {daysOfWeek.map((day) => (
            <th className={styles["table-head"]} key={day.default}>
              {day.default}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={styles["table-body"]}>
        <tr>
          {weekCalendarList.map((day) => (
            <td
              key={day}
              className={classNames(
                day.isSame(selectedDay, "date") ? styles["current-day"] : "",
                day.isSame(selectedMonth, "month")
                  ? ""
                  : styles["month-outside"],
                styles["days"]
              )}
              onClick={() => handleChangeSelectedDay(day)}
            >
              <div>{day.date()}</div>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

WeekCalendar.propTypes = {
  handleChangeSelectedDay: PropTypes.func.isRequired,
  weekCalendarList: PropTypes.array.isRequired,
  selectedDay: PropTypes.object.isRequired,
  selectedMonth: PropTypes.object.isRequired,
};

export default WeekCalendar;
