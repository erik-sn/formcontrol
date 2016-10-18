import * as _ from "lodash";

import * as types from "../actions/constants";
import { AuthReducer, ReducerAction } from "../utils/interfaces";

const INITIAL_STATE: AuthReducer = {
  showLogin: false,
  user: {},
};

export default function (state = INITIAL_STATE, action: ReducerAction): AuthReducer {
  switch (action.type) {
    case types.SHOW_LOGIN:
      return {
        showLogin: action.payload,
        user: state.user,
      };

    default:
      return state;
  }
}
