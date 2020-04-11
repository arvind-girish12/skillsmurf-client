import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import UserPreferences from "./Pages/UserPreferences/UserPreferences";

const Routes = (props) => {
  return (
    <div>
      <Switch>
        <Route path="/">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/userPreferences">
          <UserPreferences />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
