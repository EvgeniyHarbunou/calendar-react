import React from "react";
import styles from "./styles.module.scss";

const Modal = ({ children, handleCloseModal }) => {
  return (
    <>
      <div className={styles.wrapper} onClick={handleCloseModal}></div>
      <div className={styles.form}>{children}</div>
    </>
  );
};
export default Modal;
