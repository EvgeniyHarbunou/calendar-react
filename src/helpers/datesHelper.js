import * as m from "moment";

export const createDaysOfWeeksForMonth = (startOfMonth) => {
  const calendar = [];
  const startDay = startOfMonth.clone().startOf("week");
  const lastWeekDayOfMonth = startOfMonth.clone().endOf("month").endOf("week");
  for (
    startDay;
    startDay.isBefore(lastWeekDayOfMonth);
    startDay.add(1, "week")
  ) {
    calendar.push({
      days: Array(7)
        .fill(0)
        .map((n, i) => {
          return {
            startDay: startDay
              .clone()
              .startOf("week")
              .add(n + i, "day"),
            events: [],
          };
        }),
    });
  }
  console.log("cal", calendar);
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
export const createDateTime = (date, hour, minutes) => {
  const dateTime = new Date(`${date} ${hour}:${minutes}:00 `);
  return m(dateTime);
};
