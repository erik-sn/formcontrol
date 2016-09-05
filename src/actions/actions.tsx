import { ADD_PANEL, REMOVE_PANEL, CLEAR_PANELS } from "./constants.tsx";

import { ReducerAction, Panel } from "../utils/interfaces.tsx";

export function addPanel(panel: Panel): ReducerAction {
  return {
    payload: panel,
    type: ADD_PANEL,
  };
}

export function removePanel(id: string): ReducerAction {
  return {
    payload: { id },
    type: REMOVE_PANEL,
  };
}


export function clearPanels(): ReducerAction {
  return {
    payload: undefined,
    type: CLEAR_PANELS,
  };
}