import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";
import * as injectTapEventPlugin from "react-tap-event-plugin";
import { applyMiddleware, compose, createStore } from "redux";
import * as thunk from "redux-thunk";

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

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
