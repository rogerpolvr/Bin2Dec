import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/Main";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/Bin2Dec/" component={Main} />
        <Route path="/Bin2Dec/Main" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}
