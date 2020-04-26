import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const DatePickerModal = ({ list, handleChangeDate }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.today}>
        <button className={styles["today-btn"]}>Today</button>
      </div>

      <div className={styles["modal-list"]}>
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
    </div>
  );
};


DatePickerModal.propTypes = {
  list: PropTypes.array.isRequired,
  handleChangeDate: PropTypes.func.isRequired,
};

export default DatePickerModal;
