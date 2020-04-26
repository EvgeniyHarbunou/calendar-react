import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const DayCalendar = ({ dayCalendarList }) => {
  return (
    <table className={styles["table"]}>
      <tbody>
        {dayCalendarList.map((hour) => (
          <tr key={hour.name}>
            <td className={styles.hours}>{hour.name}</td>
            <td className={styles.events}></td>
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
