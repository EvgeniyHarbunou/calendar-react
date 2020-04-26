import React from "react";
import RadioButtonGroup from "../RadioButtonGroup";
import { useDispatch, useSelector } from "react-redux";
import { calendarStatuses } from "../../constants/calendarStatuses";
import HeaderDatePicker from "../datePicker";
import { setSelectedCalendarState } from "../../redux/actions/dates";
import { getSelectedCalendarState } from "../../redux/selectors/dates";
import styles from "./style.module.scss";

const HeaderCalendar = () => {
  const dispatch = useDispatch();
  const { calendarState } = useSelector((state) => ({
    calendarState: getSelectedCalendarState(state),
  }));
  const handleChangeCalendarState = (value) => {
    dispatch(setSelectedCalendarState(value));
  };

  return (
    <div className={styles["header"]}>
      <div className={styles["chose-format"]}>
        <RadioButtonGroup
          values={calendarStatuses}
          defaultChecked={calendarStatuses[0].value}
          name={"calendarTypeRadio"}
          handleChangeValue={handleChangeCalendarState}
        />
      </div>
      <div className={styles["chose-format"]}>
        <HeaderDatePicker />
      </div>
      <div className={styles["add-task"]}>3</div>
    </div>
  );
};

export default HeaderCalendar;
