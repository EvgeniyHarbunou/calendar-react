import React, { useState } from "react";
import RadioButtonGroup from "../RadioButtonGroup";
import { useDispatch } from "react-redux";
import { calendarStatuses } from "../../constants/calendarStatuses";
import HeaderDatePicker from "../datePicker";
import { setSelectedCalendarState } from "../../redux/actions/dates";
import AddEventButton from "../addEventButton";
import Modal from "../modal";
import styles from "./style.module.scss";
import EventForm from "../eventForm";

const HeaderCalendar = () => {
  const dispatch = useDispatch();
  const [isShowModal, setShowModal] = useState(true);
  const handleChangeCalendarState = (value) => {
    dispatch(setSelectedCalendarState(value));
  };

  const handleSetModal = () => {
    setShowModal(!isShowModal);
  };

  return (
    <div className={styles["header"]}>
      <div className={styles["chose-format"]}>
        <RadioButtonGroup
          values={calendarStatuses}
          defaultChecked={calendarStatuses[0].value}
          name={"calendarTypeRadio"}
          handleChangeValue={handleChangeCalendarState}
        />
      </div>
      <div className={styles["chose-format"]}>
        <HeaderDatePicker />
      </div>
      <AddEventButton handleOpenModal={handleSetModal} />
      {isShowModal && (
        <Modal handleCloseModal={handleSetModal}>
          <EventForm />
        </Modal>
      )}
    </div>
  );
};

export default HeaderCalendar;
