import { HIDE_MODAL, SHOW_MODAL } from "../actions/constants";

import { DisplayReducer, ReducerAction } from "../utils/interfaces";

const INITIAL_STATE: DisplayReducer = {
    modal: {
        showModal: false,
        modal: undefined,
    },
};

export default function (state = INITIAL_STATE, action: ReducerAction) {
  switch (action.type) {
    case HIDE_MODAL:
      return {
        modal: INITIAL_STATE.modal,
      };

    case SHOW_MODAL:
      return {
        modal: action.payload,
      };

    default:
      return state;
  }
}
