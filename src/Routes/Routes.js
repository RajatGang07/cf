// @flow
import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import FourOhFour from "../constant/FourOhFour";
import List from "../container/List";
import Profile from "../container/Profile";

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={List}
        />
        <Route
          exact
          path="/user/:userId"
          component={Profile} />
        <Route
          component={FourOhFour}
        />
      </Switch>
    </HashRouter>
  )
}

export default Routes;