import React from "react";
import styles from "./styles.module.scss";

const Modal = ({ children, handleCloseModal }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>{children}</div>
    </div>
  );
};
export default Modal;
