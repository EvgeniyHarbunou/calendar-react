import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

// eslint-disable-next-line no-unused-vars
const RadioButton = ({ value, id, checked, handleChangeValue, ...rest }) => {
  return (
    <label className={styles.label}>
      <input
        type="radio"
        value={id}
        onChange={() => handleChangeValue(id)}
        {...rest}
      />
      <span className={styles["label-button"]}>{value}</span>
    </label>
  );
};

RadioButton.propTypes = {
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  id: PropTypes.number.isRequired,
};

export default RadioButton;
