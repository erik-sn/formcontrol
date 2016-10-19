import * as _ from "lodash";

import * as types from "../actions/constants";
import { AuthReducer, ReducerAction } from "../utils/interfaces";

export const INITIAL_STATE: AuthReducer = {
  showLogin: false,
  showRegister: false,
  user: {},
};

export default function (state = INITIAL_STATE, action: ReducerAction): AuthReducer {
  const { showLogin, showRegister, user } = state;
  switch (action.type) {
    case types.SHOW_LOGIN:
      return {
        showLogin: action.payload,
        showRegister,
        user,
      };

    case types.SHOW_REGISTER:
      return {
        showLogin,
        showRegister: action.payload,
        user,
      };

    default:
      return state;
  }
}
