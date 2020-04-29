import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { daysOfWeek } from "../../constants/calendarConstants";
import Event from "../event";
import styles from "./styles.module.scss";

const MonthCalendar = ({
  size,
  handleChangeSelectedDay,
  calendar,
  selectedDay,
  selectedMonth,
  isShowEvents,
  handleClickMore,
}) => {
  const sizeClass = styles[`size-${size}`];
  return (
    <table className={classNames(styles["month-table"], sizeClass)}>
      <thead>
        <tr>
          {daysOfWeek.map((day) => (
            <th className={styles["table-head"]} key={day[size]}>
              {day[size]}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={classNames(styles["table-body"], sizeClass)}>
        {calendar.map((week) => (
          <tr key={week.days[0].startDay}>
            {week.days.map((day) => (
              <td
                onClick={
                  day.startDay.isSame(selectedMonth, "month")
                    ? () => handleChangeSelectedDay(day.startDay)
                    : () => {}
                }
                key={day.startDay}
                className={classNames(
                  day.startDay.isSame(selectedDay, "date")
                    ? styles["current-day"]
                    : "",
                  day.startDay.isSame(selectedMonth, "month")
                    ? ""
                    : styles["month-outside"]
                )}
              >
                <div>{day.startDay.date()}</div>
                {isShowEvents &&
                  day.events.map((event, index) => {
                    if (index < 3) {
                      return <Event event={event} key={event.startDate} />;
                    } else if (index === 3) {
                      return (
                        <div
                          className={styles["show-more"]}
                          key={event.startDate}
                          onClick={() => {
                            handleClickMore(day.startDay);
                          }}
                        >
                          <span>{day.events.length - 3}+ more</span>
                        </div>
                      );
                    }
                  })}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
MonthCalendar.defaultProps = {
  isShowEvents: false,
};

MonthCalendar.propTypes = {
  handleChangeSelectedDay: PropTypes.func.isRequired,
  calendar: PropTypes.array.isRequired,
  selectedDay: PropTypes.object.isRequired,
  selectedMonth: PropTypes.object.isRequired,
  size: PropTypes.string.isRequired,
  isShowEvents: PropTypes.bool,
};

export default MonthCalendar;
