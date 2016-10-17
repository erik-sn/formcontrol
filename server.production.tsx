delete process.env.BROWSER;

import * as compression from "compression";
import * as express from "express";
import * as http from "http";
import * as logger from "morgan";
import * as  React from "react";
import { createStore, applyMiddleware } from "redux";
import { renderToString } from "react-dom/server";
import { RouterContext, match } from "react-router";
import { Provider } from "react-redux";

import reducers from "./src/reducers/root";
import routes from "./src/routes";


let server: any;

const app = express(); // delcare application
const PORT = process.env.PORT || 3000;

app.use(compression()); // compress compatible files for quicker client load time
app.use(logger("dev")); // log content

// Set path to public assets
app.use("/static", express.static("dist"));

app.use("*", (req: any, res: any) => {
  match({ routes, location: req.originalUrl }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const createStoreWithMiddleware = applyMiddleware()(createStore);
      const html = renderToString(
        <Provider store={createStoreWithMiddleware(reducers)} >
          <RouterContext { ...renderProps } />
        </Provider >
      );
      res.status(200).send(renderFullPage(html));
    } else {
      res.status(404).send("Not found");
    }
  });
});

// create server based on application configuration
server = http.createServer(app);

// start the server listening on specified port
server.listen(PORT, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log("Example app listening on port", PORT);
});

/**
 * Takes a react rendering in string format and returns a full html page.
 *
 * @param {string} html - react component to be rendered
 * @return {string} full html page
 */
function renderFullPage(html: string): string {
  return `
    <!doctype html>
    <html>
      <head>
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
        <link rel="stylesheet" href="/static/bundle.min.css">
      </head>
      <body id="app-body">
        <div id="react-container">${html}</div>
      </body>
      <script src="/static/bundle.min.js"></script>
    </html>
  `;
}
