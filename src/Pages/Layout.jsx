import React, { useEffect } from "react";
import { HashRouter, Switch, Redirect, Route } from "react-router-dom";
import { useNebula } from "../Context/Nebula";

// pages
import Home from "../Pages/Home";

function Layout() {
  const { nebula } = useNebula();

  useEffect(() => {
    console.log("nebula", nebula);
  });

  return (
    <>
      <HashRouter>
        <div className="layout">
          <Switch>
            <Route path="/home" render={() => <Home />} />
            <Route path="/page2" render={() => <h1>page2</h1>} />
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </Switch>
        </div>
      </HashRouter>
    </>
  );
}

export default Layout;
