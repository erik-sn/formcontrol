import { combineReducers } from "redux";

import DesignReducer from "./design_reducer";
import DisplayReducer from "./display_reducer";

const rootReducer = combineReducers({
  design: DesignReducer,
  display: DisplayReducer,
});

export default rootReducer;
