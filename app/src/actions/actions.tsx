import * as types from "../../src/actions/constants";

import { Panel, ReducerAction  } from "../utils/interfaces";

export function showLogin(show: boolean): ReducerAction {
  return {
    payload: show,
    type: types.SHOW_LOGIN,
  };
}

export function showRegister(show: boolean): ReducerAction {
  return {
    payload: show,
    type: types.SHOW_REGISTER,
  };
}

export function basicLogin(username: string, password: string): ReducerAction {
  return {
    payload: undefined,
    type: types.BASIC_LOGIN,
  };
}

export function register(username: string, password: string): ReducerAction {
  console.log("Registering: ", username, password)
  return {
    payload: undefined,
    type: types.REGISTER,
  };
}

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

export function showPreview(show: boolean): ReducerAction {
  return {
    payload: show,
    type: types.SHOW_PREVIEW,
  };
}
