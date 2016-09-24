import * as types from "../actions/constants";

import { DisplayReducer, ReducerAction } from "../utils/interfaces";

const INITIAL_STATE: DisplayReducer = {
    showPreview: false,
    modal: {
        showModal: false,
        modal: undefined,
    },
};

export default function (state = INITIAL_STATE, action: ReducerAction): DisplayReducer {
  switch (action.type) {
    case types.HIDE_MODAL:
      return {
        showPreview: state.showPreview,
        modal: INITIAL_STATE.modal,
      };

    case types.SHOW_MODAL:
      return {
        showPreview: state.showPreview,
        modal: action.payload,
      };

    case types.SHOW_PREVIEW:
      return {
        showPreview: action.payload,
        modal: state.modal,
      };

    default:
      return state;
  }
}
