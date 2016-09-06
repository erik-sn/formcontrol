import { ADD_PANEL, CLEAR_PANELS, HIDE_MODAL, REMOVE_PANEL, SHOW_MODAL,
  UPDATE_PANEL, UPDATE_PANELS  } from "./constants.tsx";

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

export function updatePanel(panel: Panel): ReducerAction {
  return {
    payload: panel,
    type: UPDATE_PANEL,
  };
}

export function updatePanels(panels: Array<Panel>): ReducerAction {
  return {
    payload: panels,
    type: UPDATE_PANELS,
  };
}

export function showModal(modal: JSX.Element): ReducerAction {
  return {
    payload: {
        showModal: true,
        modal,
      },
    type: SHOW_MODAL,
  };
}

export function hideModal(): ReducerAction {
  return {
    payload: {
        showModal: false,
        undefined,
      },
    type: HIDE_MODAL,
  };
}

