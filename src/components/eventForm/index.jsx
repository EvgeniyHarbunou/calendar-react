import React, { useState } from "react";
import usecreateEventForm from "../hooks/createEventHook";
import { createDateTime } from "../../helpers/datesHelper";
import { validateTime } from "../../helpers/inputValidators";
import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";
import { setEvent } from "../../redux/actions/dates";
import { closeModal } from "../../redux/actions/modal";

const EventForm = () => {
  const createEvent = () => {
    delete err.stateError;
    const name = inputs.name;
    const description = inputs.description;
    const startDate = createDateTime(
      inputs.date,
      inputs.timeFromHour,
      inputs.timeFromMinutes
    );
    const endDate = createDateTime(
      inputs.date,
      inputs.timeToHour,
      inputs.timeToMinutes
    );
    const invalidDate = validateTime(startDate, endDate);
    setError({ invalidDate });

    if (!invalidDate) {
      const event = {
        name,
        description,
        startDate,
        endDate,
      };
      try {
        dispatch(setEvent(event));
        dispatch(closeModal());
      } catch (e) {
        setError({ stateError: e.message });
      }
    }
  };
  const dispatch = useDispatch();
  const [err, setError] = useState({});
  const { inputs, handleInputChange, handleSubmit } = usecreateEventForm(
    {
      name: "",
      description: "",
      date: "",
      timeFromHour: "00",
      timeFromMinutes: "00",
      timeToHour: "01",
      timeToMinutes: "00",
    },
    createEvent
  );
  return (
    <div className={styles["add-event"]}>
      <h1>New Event</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className={styles["input-block"]}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            onChange={handleInputChange}
            value={inputs.name}
            required
          />
        </div>
        <div className={styles["input-block"]}>
          <label htmlFor="description">Description</label>
          <input
            id="description"
            type="text"
            name="description"
            onChange={handleInputChange}
            value={inputs.description}
          />
        </div>
        <div className={styles["input-block"]}>
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            name="date"
            onChange={handleInputChange}
            value={inputs.date}
            required
          />
        </div>

        <div className={styles["input-block"]}>
          <label htmlFor="timeFromHour">Time from</label>
          <input
            id="timeFromHour"
            type="number"
            name="timeFromHour"
            onChange={handleInputChange}
            value={inputs.timeFromHour}
            min="0"
            max="23"
          />
          <input
            id="timeFromMinutes"
            type="number"
            name="timeFromMinutes"
            onChange={handleInputChange}
            value={inputs.timeFromMinutes}
            min="0"
            max="59"
          />
        </div>
        <div className={styles["input-block"]}>
          <label htmlFor="timeToHour">Time to</label>
          <input
            id="timeToHour"
            type="number"
            name="timeToHour"
            onChange={handleInputChange}
            value={inputs.timeToHour}
            min="0"
            max="23"
          />
          <input
            id="timtimeToMinuteseTo"
            type="number"
            name="timeToMinutes"
            onChange={handleInputChange}
            value={inputs.timeToMinutes}
            min="0"
            max="59"
          />
        </div>
        {err.invalidDate && (
          <small className={styles["time-err"]}>Time incorect </small>
        )}
        <div className={styles["controller"]}>
          {err.stateError && (
            <small className={styles["time-err"]}>{err.stateError}</small>
          )}
          <button type="submit" className={styles.button}>
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
