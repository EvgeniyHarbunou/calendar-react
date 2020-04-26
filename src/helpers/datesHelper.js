import * as m from "moment";

export const createDaysOfWeeks = (startOfMonth) => {
  const startWeek = startOfMonth.clone().isoWeek();
  const endWeek = startOfMonth.clone().endOf("month").isoWeek();
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

export const createMonthsOfYear = (startOfYear) => {
  // const startOfYear = m().clone().startOf("year");
  const endOfYear = m().set(startOfYear).clone().endOf('year');
  let months = [];
  for (let month = startOfYear; month <= endOfYear; month.add(1, "month")) {
    months.push({
      name: month.clone().format('MMMM'),
      value: month.clone(),
    });
  }
  return months;
};
