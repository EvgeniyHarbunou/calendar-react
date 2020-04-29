import React from "react";
import classNames from "classnames";
import * as m from "moment";
import styles from "./styles.module.scss";

const Event = ({ event, isDayMode, hour }) => {
  let topStyle;
  let currentHeight = 30;

  if (isDayMode) {
    topStyle = (event.startDate - hour.value) / 10 / 60 / 60;
    const heightTime = (event.endDate - event.startDate) / 1000 / 60 / 2;
    currentHeight = heightTime > currentHeight ? heightTime : currentHeight;
   
  }
  const cls = isDayMode
    ? {
        position: "absolute",
        top: topStyle+'%',
        minWidth: "150px",
        minHeight: currentHeight,
        left: 0,
      }
    : null;

  return (
    <div className={styles["event-container"]} style={cls}>
      <span>{`
       ${event.name}
      ${event.startDate.format("HH:mm")}-${event.endDate.format(
        "HH-mm"
      )}`}</span>
    </div>
  );
};

export default Event;
