import React from "react";
import styles from './styles.module.scss';

const Layout = ({ children }) => {
  return <div className={styles.main}>{children}</div>;
};
export default Layout;
