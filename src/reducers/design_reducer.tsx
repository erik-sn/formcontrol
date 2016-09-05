import { ADD_PANEL, REMOVE_PANEL, CLEAR_PANELS, UPDATE_PANELS } from "../actions/constants.tsx";

import { DesignReducer, ReducerAction } from "../utils/interfaces.tsx";

const INITIAL_STATE: DesignReducer = { panels: [],}

export default function (state = INITIAL_STATE, action: ReducerAction) {
  switch (action.type) {
    case ADD_PANEL:
      return {
        panels: state.panels.concat(action.payload),
      }

    case REMOVE_PANEL:
      return {
        panels: state.panels.filter(panel => panel.id !== action.payload),
      }

    case CLEAR_PANELS:
      return {
        panels: [],
      }

    case UPDATE_PANELS:
      return {
        panels: action.payload,
      }

    default:
      return state;
  }
}