import moment, * as m from "moment";

export const createDaysOfWeeksForMonth = (startOfMonth) => {
  let startWeek = startOfMonth.clone().isoWeek();
  let endWeek = startOfMonth.clone().endOf("month").isoWeek();
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

export const createDaysOfWeek = (startOfWeekDate) => {
  const startOfWeek = startOfWeekDate.clone();
  const endOfWeek = startOfWeekDate.clone().endOf("week");
  let weekDays = [];
  for (let week = startOfWeek; week <= endOfWeek; week.add(1, "day")) {
    weekDays.push(week.clone());
  }
  return weekDays;
};

export const createMonthsOfYear = (startOfYear) => {
  const endOfYear = m().set(startOfYear).clone().endOf("year");
  let months = [];
  for (let month = startOfYear; month <= endOfYear; month.add(1, "month")) {
    months.push({
      name: month.clone().format("MMMM"),
      value: month.clone(),
    });
  }
  return months;
};

export const createWeeksOfMonth = (startOfMonth) => {
  const startWeek = startOfMonth.clone().isoWeek();
  const endWeek = startOfMonth.clone().endOf("month").isoWeek();
  let weeks = [];
  for (let week = startWeek; week <= endWeek; week++) {
    weeks.push({
      name: `${m()
        .week(week)
        .startOf("week")
        .clone()
        .format("D.MMMM.YYYY")} - ${m()
        .week(week)
        .endOf("week")
        .clone()
        .format("D.MMMM.YYYY")}`,
      value: m().week(week).startOf("week"),
    });
  }
  return weeks;
};

export const createHoursOfDay = (day) => {
  const startofDay = day.clone().startOf("day");
  const endOfDay = day.clone().endOf("day");
  let days = [];
  for (let hour = startofDay; hour <= endOfDay; hour.add(1, "hour")) {
    days.push({
      name: `${hour.clone().format("HH.mm")} - ${hour
        .clone()
        .endOf("hour")
        .add(1, "minute")
        .format("HH-mm")}`,
      value: hour,
    });
  }

  return days;
};
