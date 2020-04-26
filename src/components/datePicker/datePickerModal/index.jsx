import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import MonthCalendar from "../../monthCalendar";
import { tablesSize } from "../../../constants/tableSize";

const DatePickerModal = ({
  list,
  handleChangeDate,
  twoColumns,
  isDayState,
  selectedMonth,
  handleBackwardMonth,
  handleForwardMonth,
  ...rest
}) => {
  return (
    <div className={styles.modal}>
      <div className={styles.today}>
        <button className={styles["today-btn"]}>Today</button>
      </div>
      {!isDayState && (
        <div className={twoColumns ? styles["modal-list"] : null}>
          {list.map((item) => (
            <p
              key={item.value}
              className={styles["modal-elem"]}
              onClick={() => handleChangeDate(item.value)}
            >
              {item.name}
            </p>
          ))}
        </div>
      )}
      {isDayState && (
        <>
          <div className={styles["modal-header-month"]}>
            <button
              className={styles["modal-header-btn"]}
              onClick={handleBackwardMonth}
            >
              {" "}
              &lt;&lt;{" "}
            </button>
            <div>{selectedMonth.clone().format("MMMM YYYY")}</div>
            <button
              className={styles["modal-header-btn"]}
              onClick={handleForwardMonth}
            >
              {" "}
              &gt;&gt;{" "}
            </button>
          </div>
          <MonthCalendar
            calendar={list}
            {...rest}
            size={tablesSize.SMALL}
            selectedMonth={selectedMonth}
            handleChangeSelectedDay={handleChangeDate}
          />
        </>
      )}
    </div>
  );
};

DatePickerModal.defaultProps = {
  twoColumns: false,
};

DatePickerModal.propTypes = {
  list: PropTypes.array.isRequired,
  handleChangeDate: PropTypes.func.isRequired,
  twoColumns: PropTypes.bool,
};

export default DatePickerModal;
