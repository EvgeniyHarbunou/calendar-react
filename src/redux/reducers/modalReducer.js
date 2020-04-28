import { OPEN_MODAL, CLOSE_MODAL } from "../action-types/modal";

const initialState = {
  modalType: null,
  isOpen: false,
};

export const modalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_MODAL: {
      return {
        ...state,
        modalType: payload,
        isOpen: true,
      };
    }
    case CLOSE_MODAL: {
      return {
        initialState,
      };
    }

    default:
      return state;
  }
};
