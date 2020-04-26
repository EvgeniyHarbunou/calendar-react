import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as moment from "moment";
import { getSelectedMonth } from "../../redux/selectors/dates";
import { createMonthsOfYear } from "../../helpers/datesHelper";
import DatePickerModal from "./datePickerModal";
import styles from "./styles.module.scss";
import { forwardMonth, setSelectedMonth, backwardMonth } from "../../redux/actions/dates";

const HeaderDatePicker = () => {
  const dispatch = useDispatch();
  const [isShowDatepicker, setShowDatePicker] = useState(false);
  const { selectedMonth } = useSelector((state) => ({
    selectedMonth: getSelectedMonth(state),
  }));

  const m = moment();
  const startOfYear = m.set(selectedMonth).clone().startOf("year");
  const listOfMonths = createMonthsOfYear(startOfYear);

  const handleChangeDate = (value) => {
    dispatch(setSelectedMonth(value));
    setShowDatePicker(false);
  };
  const handleForwardDate = () => {
    dispatch(forwardMonth());
  };
  const handleBackwardDate = () => {
    dispatch(backwardMonth());
  };

  return (
    <div className={styles["buttons-block"]}>
      <button className={styles["change-month"]} onClick={handleBackwardDate}>
        {" "}
        &lt;{" "}
      </button>

      <button
        className={styles["custom-input"]}
        onClick={() => setShowDatePicker(!isShowDatepicker)}
      >
        {selectedMonth.clone().format("MMMM YYYY")}
      </button>
      <button className={styles["change-month"]} onClick={handleForwardDate}>
        {" "}
        &gt;{" "}
      </button>
      {isShowDatepicker && (
        <DatePickerModal
          list={listOfMonths}
          handleChangeDate={handleChangeDate}
        />
      )}
    </div>
  );
};

export default HeaderDatePicker;
