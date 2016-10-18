import { combineReducers } from "redux";

import AuthReducer from "./auth_reducer";
import DesignReducer from "./design_reducer";
import DisplayReducer from "./display_reducer";

const rootReducer = combineReducers({
  design: DesignReducer,
  display: DisplayReducer,
  auth: AuthReducer,
});

export default rootReducer;
