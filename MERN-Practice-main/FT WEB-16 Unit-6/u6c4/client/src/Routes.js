import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from "./404NotFound";
import App from "./App";
import Redirection from "./redirect";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/notfound" component={NotFound} />
        <Route path="/:shortid" component={Redirection} />3
      </Switch>
    </BrowserRouter>
  );
}
