import * as React from "react";
import { IndexRoute, Route, Router  } from "react-router";

import Application from "./components/application.tsx";

const Routes = (
  <Router>
    <Route path="/" >
      <IndexRoute component={ Application } />
      <Route path="/:mode" component={ Application } />
    </Route>
  </Router>
);

export default Routes;
