import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";
import { applyMiddleware, compose, createStore } from "redux";
import * as thunk from "redux-thunk";

import reducers from "./reducers/root";
import router  from "./routes";

// const createStoreWithMiddleware: any = applyMiddleware(thunk.default)(createStore);
// Redux Dev Tool configuration
const store = createStore(reducers, compose(
  applyMiddleware(thunk.default), window.devToolsExtension ? window.devToolsExtension() : f => f
));
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>{router}</Router>
  </Provider>,
document.getElementById("react-container"));
