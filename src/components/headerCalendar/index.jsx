import React from "react";
import RadioButtonGroup from "../RadioButtonGroup";
import { useDispatch, useSelector } from "react-redux";
import { calendarStatuses } from "../../constants/calendarStatuses";
import HeaderDatePicker from "../datePicker";
import { setSelectedCalendarState } from "../../redux/actions/dates";
import AddEventButton from "../addEventButton";
import Modal from "../modal";
import styles from "./style.module.scss";
import EventForm from "../eventForm";
import { getModalState } from "../../redux/selectors/dates";
import { openModal, closeModal } from "../../redux/actions/modal";

const HeaderCalendar = () => {
  const dispatch = useDispatch();
  const handleChangeCalendarState = (value) => {
    dispatch(setSelectedCalendarState(value));
  };
  const { modal } = useSelector((state) => ({
    modal: getModalState(state),
  }));
  const handleOpenModal = () => {
    dispatch(openModal("create-event"));
  };
  const handleCloseModal = () => {
    dispatch(closeModal("create-event"));
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
      <AddEventButton handleOpenModal={handleOpenModal} />
      {modal.isOpen && (
        <Modal handleCloseModal={handleCloseModal} modalType={modal.modalType}>
          <EventForm />
        </Modal>
      )}
    </div>
  );
};

export default HeaderCalendar;
