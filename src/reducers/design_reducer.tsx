import * as _ from "lodash";

import * as types from "../actions/constants.tsx";
import { DesignReducer, Panel, ReducerAction } from "../utils/interfaces.tsx";

const INITIAL_STATE: DesignReducer = { panels: [] };

export default function (state = INITIAL_STATE, action: ReducerAction) {
  switch (action.type) {
    case types.ADD_PANEL:
      return {
        panels: state.panels.concat(action.payload),
      };

    case types.REMOVE_PANEL:
      return {
        panels: state.panels.filter(panel => panel.id !== action.payload.id),
      };

    case types.CLEAR_PANELS:
      return {
        panels: INITIAL_STATE.panels,
      };

    case types.UPDATE_PANEL:
      const index = _.indexOf(state.panels, _.find(state.panels, (panel: Panel) => panel.id === action.payload.id));
      const panels = state.panels;
      panels[index] = action.payload;
      return {
        panels,
      };

    case types.UPDATE_PANELS:
      return {
        panels: action.payload,
      };

    case types.SAVE_PANELS:
      return state;

    default:
      return state;
  }
}
