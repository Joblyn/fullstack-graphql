import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {ApolloProvider} from "react-apollo";
import App from "./components/App";
import client from "./client";
import "./index.css";

const Root = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
);

ReactDOM.render(<Root />, document.getElementById("app"));

if (module.hot) {
  module.hot.accept();
}
