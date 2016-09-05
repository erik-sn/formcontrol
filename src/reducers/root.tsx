import { combineReducers } from "redux";

import DesignReducer from "./design_reducer.tsx";

const rootReducer = combineReducers({
  design: DesignReducer,
});

export default rootReducer;
