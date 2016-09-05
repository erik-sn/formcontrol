import { combineReducers } from "redux";

import DesignReducer from "./design_reducer.tsx";
import DisplayReducer from "./display_reducer.tsx";

const rootReducer = combineReducers({
  design: DesignReducer,
  display: DisplayReducer,
});

export default rootReducer;
