import React from "react";
import styles from "./styles.module.scss";

const Event = ({ event, isDayMode, hour, index }) => {
  const colors = [
    "skyblue",
    "yellow",
    "pink",
    "antiquewhite",
    "aquamarine",
    "greenyellow",
  ];
  const currentColor = {
    backgroundColor: colors[Math.floor(Math.random() * colors.length)],
  };
  let topStyle;
  let currentHeight = 15;

  if (isDayMode) {
    topStyle = (event.startDate - hour.value) / 10 / 60 / 60;
    const heightTime = (event.endDate - event.startDate) / 1000 / 60 / 2;
    currentHeight = heightTime > currentHeight ? heightTime : currentHeight;
    index = index * 150;
  }
  const cls = isDayMode
    ? {
        position: "absolute",
        top: topStyle + "%",
        minWidth: "150px",
        maxHeight: currentHeight,
        minHeight: currentHeight,
        left: index + "px",
      }
    : null;

  return (
    <div
      className={styles["event-container"]}
      style={{ ...cls, ...currentColor }}
    >
      <span>{`
       ${event.name}
      ${event.startDate.format("HH:mm")}-${event.endDate.format(
        "HH-mm"
      )}`}</span>
    </div>
  );
};

export default Event;
