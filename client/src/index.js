import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import App from "./components/App";
import client from "./client";
import "./index.css";

const Root = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.getElementById("app"));

if (module.hot) {
  module.hot.accept();
}
