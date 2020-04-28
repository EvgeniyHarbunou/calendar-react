import React from "react";
import styles from "./styles.module.scss";

const AddEventButton = ({ handleOpenModal }) => {
  return (
    <button className={styles["event-btn"]} onClick={handleOpenModal}>
      +
    </button>
  );
};

export default AddEventButton;
