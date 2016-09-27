import * as _ from "lodash";

import * as types from "../actions/constants";
import { DesignReducer, Panel, ReducerAction } from "../utils/interfaces";

const INITIAL_STATE: DesignReducer = {
  layout: {
    height: undefined,
    width: undefined,
  },
  panels: [],
};

const AVAILABLE_PANELS = ["input", "select", "radio", "checkbox", "submit button", "cancel button"];

export default function (state = INITIAL_STATE, action: ReducerAction): DesignReducer {
  switch (action.type) {
    case types.ADD_PANEL:
      if (_.includes(AVAILABLE_PANELS, action.payload.type)) {
        return {
          layout: state.layout,
          panels: state.panels.concat(action.payload),
        };
      }
      return state;

    case types.REMOVE_PANEL:
      return {
        layout: state.layout,
        panels: state.panels.filter(panel => panel.id !== action.payload.id),
      };

    case types.CLEAR_PANELS:
      return {
        layout: state.layout,
        panels: INITIAL_STATE.panels,
      };

    case types.UPDATE_PANEL:
      const index = _.indexOf(state.panels, _.find(state.panels, (panel: Panel) => panel.id === action.payload.id));
      const panels = state.panels;
      panels[index] = action.payload;
      return {
        layout: state.layout,
        panels,
      };

    case types.UPDATE_PANELS:
      return {
        layout: state.layout,
        panels: action.payload,
      };

    case types.SAVE_PANELS:
      return state;

    default:
      return state;
  }
}
