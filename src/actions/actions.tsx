import * as types from "../../src/actions/constants";

import { Panel, ReducerAction  } from "../utils/interfaces";

export function addPanel(panel: Panel): ReducerAction {
  return {
    payload: panel,
    type: types.ADD_PANEL,
  };
}

export function removePanel(id: string): ReducerAction {
  return {
    payload: { id },
    type: types.REMOVE_PANEL,
  };
}

export function clearPanels(): ReducerAction {
  return {
    payload: undefined,
    type: types.CLEAR_PANELS,
  };
}

export function updatePanel(panel: Panel): ReducerAction {
  return {
    payload: panel,
    type: types.UPDATE_PANEL,
  };
}

export function updatePanels(panels: Array<Panel>): ReducerAction {
  return {
    payload: panels,
    type: types.UPDATE_PANELS,
  };
}

export function showModal(modal: JSX.Element): ReducerAction {
  return {
    payload: {
        showModal: true,
        modal,
    },
    type: types.SHOW_MODAL,
  };
}

export function hideModal(): ReducerAction {
  return {
    payload: {
        showModal: false,
        undefined,
    },
    type: types.HIDE_MODAL,
  };
}

export function savePanels(panels: Array<Panel>): ReducerAction {
  return {
    payload: undefined,
    type: types.SAVE_PANELS,
  };
}

export function showPreview(): ReducerAction {
  return {
    payload: true,
    type: types.SHOW_PREVIEW,
  };
}

export function hidePreview(): ReducerAction {
  return {
    payload: false,
    type: types.SHOW_PREVIEW,
  };
}