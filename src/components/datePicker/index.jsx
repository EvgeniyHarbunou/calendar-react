import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as moment from "moment";
import {
  getSelectedMonth,
  getSelectedCalendarState,
  getSelectedWeek,
  getSelectedDate,
} from "../../redux/selectors/dates";
import {
  createMonthsOfYear,
  createWeeksOfMonth,
  createDaysOfWeeksForMonth,
} from "../../helpers/datesHelper";
import { WEEK, MONTH, DAY } from "../../constants/calendarStatuses";
import DatePickerModal from "./datePickerModal";
import {
  backwardCalendar,
  forwardCalendar,
  setSelectedMonth,
  setSelectedWeek,
  setSelectedDate,
  forwardMonth,
  backwardMonth,
} from "../../redux/actions/dates";
import styles from "./styles.module.scss";

const HeaderDatePicker = () => {
  const dispatch = useDispatch();
  const [isShowDatepicker, setShowDatePicker] = useState(false);
  const {
    selectedMonth,
    calendarState,
    selectedWeek,
    selectedDay,
  } = useSelector((state) => ({
    selectedDay: getSelectedDate(state),
    selectedMonth: getSelectedMonth(state),
    calendarState: getSelectedCalendarState(state),
    selectedWeek: getSelectedWeek(state),
  }));

  const m = moment();
  let listOfdates = [];
  let titleDatepicker = "";
  switch (calendarState) {
    case WEEK: {
      const startOfMonth = m.set(selectedMonth).clone().startOf("month");
      listOfdates = createWeeksOfMonth(startOfMonth);
      titleDatepicker = `${selectedWeek
        .clone()
        .format("D.MMMM.YYYY")} - ${selectedWeek
        .clone()
        .endOf("week")
        .format("D.MMMM.YYYY")}`;
      break;
    }
    case MONTH: {
      const startOfYear = m.set(selectedMonth).clone().startOf("year");
      listOfdates = createMonthsOfYear(startOfYear);
      titleDatepicker = selectedMonth.clone().format("MMMM YYYY");
      break;
    }
    case DAY: {
      listOfdates = createDaysOfWeeksForMonth(selectedMonth);
      titleDatepicker = selectedDay.clone().format("DD MMMM YYYY");
      break;
    }
    default: {
      return;
    }
  }

  const handleChangeDate = (value) => {
    if (calendarState === MONTH) {
      dispatch(setSelectedMonth(value));
    }
    if (calendarState === WEEK) {
      dispatch(setSelectedWeek(value));
    }
    if (calendarState === DAY) {
      dispatch(setSelectedDate(value));
    }
    setShowDatePicker(false);
  };
  const handleForwardCalendar = () => {
    dispatch(forwardCalendar());
  };
  const handleBackwardCalendar = () => {
    dispatch(backwardCalendar());
  };
  const handleForwardMonth = () => {
    dispatch(forwardMonth());
  };
  const handleBackwardMonth = () => {
    dispatch(backwardMonth());
  };

  return (
    <div className={styles["buttons-block"]}>
      <button
        className={styles["change-month"]}
        onClick={handleBackwardCalendar}
      >
        {" "}
        &lt;{" "}
      </button>

      <button
        className={styles["custom-input"]}
        onClick={() => setShowDatePicker(!isShowDatepicker)}
      >
        {titleDatepicker}
      </button>
      <button
        className={styles["change-month"]}
        onClick={handleForwardCalendar}
      >
        {" "}
        &gt;{" "}
      </button>
      {isShowDatepicker && (
        <DatePickerModal
          list={listOfdates}
          twoColumns={calendarState === MONTH ? true : false}
          isDayState={calendarState === DAY ? true : false}
          selectedDay={selectedDay}
          selectedMonth={selectedMonth}
          handleChangeDate={handleChangeDate}
          handleBackwardMonth={handleBackwardMonth}
          handleForwardMonth={handleForwardMonth}
        />
      )}
    </div>
  );
};

export default HeaderDatePicker;
