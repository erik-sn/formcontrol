import { ADD_DESIGN_PANEL } from "../actions/constants.tsx";

import { DesignReducer, ReducerAction } from "../utils/interfaces.tsx";

const INITIAL_STATE: DesignReducer = { panels: [],}

export default function (state = INITIAL_STATE, action: ReducerAction) {
  switch (action.type) {
    case ADD_DESIGN_PANEL:
      if (!action.payload) {
        return state;
      }
      console.log(action);
      return state;
      

    default:
      return state;
  }
}