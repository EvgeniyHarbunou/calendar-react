import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { daysOfWeek } from "../../constants/calendarConstants";
import styles from "./styles.module.scss";
import Event from "../event";

const WeekCalendar = ({
  handleChangeSelectedDay,
  weekCalendarList,
  selectedDay,
  selectedMonth,
}) => {
  return (
    <table className={styles["week-table"]}>
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
              key={day.startDay}
              className={classNames(
                day.startDay.isSame(selectedDay, "date")
                  ? styles["current-day"]
                  : "",
                day.startDay.isSame(selectedMonth, "month")
                  ? ""
                  : styles["month-outside"],
                styles["days"]
              )}
              onClick={() => handleChangeSelectedDay(day.startDay)}
            >
              <div className={styles["td-container"]}>
                <div>{day.startDay.date()}</div>
                {day.events.map((event) => (
                  <Event event={event} key={event.startDate + event.name} />
                ))}
              </div>
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
