import React from "react";
import PropTypes from "prop-types";
import Event from "../event";
import styles from "./styles.module.scss";

const DayCalendar = ({ dayCalendarList }) => {
  return (
    <table className={styles["table"]}>
      <tbody>
        {dayCalendarList.map((hour) => (
          <tr key={hour.name} className={styles["row"]}>
            <td className={styles.hours}>{hour.name}</td>
            <td className={styles.events}>
              {hour.events.map((event, index) => (
                <Event
                  isDayMode={true}
                  hour={hour}
                  key={event.name + event.startDate + event.endDate + index}
                  event={event}
                />
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

DayCalendar.propTypes = {
  dayCalendarList: PropTypes.array.isRequired,
  selectedDay: PropTypes.object.isRequired,
  selectedMonth: PropTypes.object.isRequired,
};

export default DayCalendar;
