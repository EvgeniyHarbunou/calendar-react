import React, { useState } from "react";
import * as moment from "moment";
import { Day } from "../day";
import { daysOfWeek } from "../../constants/daysOfWeek";
import styles from "./style.module.scss";

moment.updateLocale("en", {
  week: {
    dow: 1,
  },
});

const MonthCalendar = () => {
  const [selectedMonth, setselectedMonth] = useState(moment());
  const [selectedDay, setSelectedDay] = useState(moment().clone());
  const [selectedMonthTest, setselectedMonthTest] = useState(moment());

  const startWeek = moment().clone().startOf("month").isoWeek();
  const endWeek = moment().clone().endOf("month").isoWeek();
  

  let table = [];

  for (let week = startWeek; week <= endWeek; week++) {
    table.push({
      week: week,
      days: Array(7)
        .fill(0)
        .map((n, i) =>
          moment()
            .week(week)
            .startOf("week")
            .clone()
            .add(n + i, "day")
        ),
    });
  }
  
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
        {table.map((week) => (
          <tr key={week.week}>
            {week.days.map((day) => (
              <td key={day} className={day.isSame(selectedDay, 'date') ? styles['current-day'] : ''}>
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
