import { ADD_PANEL, CLEAR_PANELS, REMOVE_PANEL, UPDATE_PANELS } from "./constants.tsx";

import { Panel, ReducerAction  } from "../utils/interfaces.tsx";

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

export function updatePanels(panels: Array<Panel>): ReducerAction {
  return {
    payload: panels,
    type: UPDATE_PANELS,
  };
}