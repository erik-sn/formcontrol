import * as _ from "lodash";

import { ADD_PANEL, CLEAR_PANELS,  REMOVE_PANEL, UPDATE_PANEL,
   UPDATE_PANELS } from "../actions/constants.tsx";
import { DesignReducer, Panel, ReducerAction } from "../utils/interfaces.tsx";

const INITIAL_STATE: DesignReducer = { panels: [] };

export default function (state = INITIAL_STATE, action: ReducerAction) {
  switch (action.type) {
    case ADD_PANEL:
      return {
        panels: state.panels.concat(action.payload),
      };

    case REMOVE_PANEL:
      return {
        panels: state.panels.filter(panel => panel.id !== action.payload.id),
      };

    case CLEAR_PANELS:
      return {
        panels: INITIAL_STATE.panels,
      };

    case UPDATE_PANEL:
      const index = _.indexOf(state.panels, _.find(state.panels, (panel: Panel) => panel.id === action.payload.id));
      const panels = state.panels;
      panels[index] = action.payload;
      return {
        panels,
      };

    case UPDATE_PANELS:
      return {
        panels: action.payload,
      };

    default:
      return state;
  }
}
