import { ADD_DESIGN_PANEL } from "./constants.tsx";

import { ReducerAction, Panel } from "../utils/interfaces.tsx";

export function addDesignPanel(panel: Panel): ReducerAction {
  return {
    payload: panel,
    type: ADD_DESIGN_PANEL,
  };
}