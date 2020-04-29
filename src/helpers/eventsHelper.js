import * as m from "moment";
export const addEventsToMonthCalendar = (calendar, events) => {
  const lastWeek = calendar[calendar.length - 1];
  const lastDay = lastWeek.days[lastWeek.days.length - 1].startDay
    .clone()
    .endOf("day");
  const firstDay = calendar[0].days[0].startDay;
  const suitableEvents = getSuitableEvents(events, firstDay, lastDay);

  suitableEvents.forEach((event) => {
    calendar.forEach((week) => {
      week.days.forEach((day) => {
        if (day.startDay.isSame(event.startDate, "day")) {
          day.events.push(event);
        }
      });
    });
  });

  return calendar;
};

export const addEventsToWeekCalendar = (calendar, events) => {
  const firstDay = calendar[0].startDay;
  const lastDay = calendar[calendar.length - 1].startDay.clone().endOf("day");
  const suitableEvents = getSuitableEvents(events, firstDay, lastDay);
  suitableEvents.forEach((event) => {
    calendar.forEach((day) => {
      if (day.startDay.isSame(event.startDate, "day")) {
        day.events.push(event);
      }
    });
  });
  return calendar;
};

export const addEventsToHoursOfDay = (day, events) => {
  const firstDay = day[0].value.clone();
  const endDay = firstDay.endOf("day").clone();
  const suitableEvents = [];
  events.forEach((event) => {
    if (event.startDate.isSame(firstDay, "day")) {
      suitableEvents.push(event);
    }
  });
  suitableEvents.forEach((event) => {
    day.forEach((hour) => {
      const endHour = hour.value.clone().add(1, "hour");
      if (
        event.startDate.isBetween(hour.value, endHour) ||
        event.startDate.isSame(hour.value)
      ) {
        hour.events.push(event);
      }
    });
  });
  return day;
};

export const getSuitableEvents = (events, firstDay, lastDay) => {
  const suitableEvents = [];
  events.forEach((event) => {
    if (event.startDate.isBetween(firstDay, lastDay)) {
      suitableEvents.push(event);
    }
  });
  return suitableEvents;
};
