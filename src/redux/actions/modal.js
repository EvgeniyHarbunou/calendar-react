import { OPEN_MODAL, CLOSE_MODAL } from "../action-types/modal";

export const openModal = (modal) => ({
  type: OPEN_MODAL,
  payload: modal,
});
export const closeModal = (modal) => ({
  type: CLOSE_MODAL,
  payload: modal,
});
