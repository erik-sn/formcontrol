import { ADD_DESIGN_PANEL, REMOVE_DESIGN_PANEL } from "./constants.tsx";

import { ReducerAction, Panel } from "../utils/interfaces.tsx";

export function addDesignPanel(panel: Panel): ReducerAction {
  return {
    payload: panel,
    type: ADD_DESIGN_PANEL,
  };
}

export function removeDesignPanel(id: number): ReducerAction {
  return {
    payload: { id },
    type: REMOVE_DESIGN_PANEL,
  };
}