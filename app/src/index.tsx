import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";
import * as injectTapEventPlugin from "react-tap-event-plugin";
import { applyMiddleware, compose, createStore } from "redux";
import * as thunk from "redux-thunk";
import * as material from "material-ui";

import reducers from "./reducers/root";
import router  from "./routes";

// needed to use custom window properties
interface CustomWindow extends Window {
  devToolsExtension: any;
}
declare const window: CustomWindow;

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

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
