import React from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';
import { Day } from "../day";
import { daysOfWeek } from "../../constants/calendarConstants";

import styles from "./styles.module.scss";

const MonthCalendar = ({
  handleChangeSelectedDay,
  calendar,
  selectedDay,
  selectedMonth,
}) => {
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
                    : () => {}
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

MonthCalendar.propTypes = {
  handleChangeSelectedDay: PropTypes.func.isRequired,
  calendar: PropTypes.array.isRequired,
  selectedDay: PropTypes.object.isRequired,
  selectedMonth: PropTypes.object.isRequired,
};

export default MonthCalendar;
