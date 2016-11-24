import { MuiThemeProvider } from "material-ui/styles";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import * as React from "react";
import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";
import { applyMiddleware, compose, createStore } from "redux";
import * as thunk from "redux-thunk";

import reducers from "./reducers/root";
import router  from "./routes";

// needed to use custom window properties
interface CustomWindow extends Window {
  devToolsExtension: any;
}
declare const window: CustomWindow;

// const createStoreWithMiddleware: any = applyMiddleware(thunk.default)(createStore);
// Redux Dev Tool configuration
const store = createStore(reducers, compose(
  applyMiddleware(thunk.default), window.devToolsExtension ? window.devToolsExtension() : (f: any) => f
));

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: "#0D1313",
    primary2Color: "#0D1313",
    primary3Color: "#0D1313",
    accent1Color: "#999",
  },
});

const App = () : JSX.Element => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme} >
      <Router history={browserHistory}>{router}</Router>
    </MuiThemeProvider>
  </Provider>
);

export default App;
