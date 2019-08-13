import Sign_In from "./components/Sign_In";
import Sign_Up from "./components/Sign_Up";
import App from "./App.js";
import Chat from "./components/Chat";
// import NoMatch from "./components/noMatch";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path="/signIn" component={Sign_In} />
          <Route path="/signUp" component={Sign_Up} />
          <Route path="/chat" component={Chat} />
          {/*<Route component={NoMatch} />*/}
        </Switch>
      </div>
    </Router>
  )};

export default AppRouter;
