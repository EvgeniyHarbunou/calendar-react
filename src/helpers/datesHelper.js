import * as m from "moment";

export const createDaysOfWeeks = (startofMonth) => {
  const startWeek = startofMonth.clone().isoWeek();
  const endWeek = startofMonth.clone().endOf("month").isoWeek();
  const calendar = [];
  for (let week = startWeek; week <= endWeek; week++) {
    calendar.push({
      week: week,
      days: Array(7)
        .fill(0)
        .map((n, i) =>
          m()
            .week(week)
            .startOf("week")
            .clone()
            .add(n + i, "day")
        ),
    });
  }
  return calendar;
};
