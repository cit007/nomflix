import React from "react";
import {HashRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Home from "../Routes/Home"
import TV from "../Routes/TV"
import Search from "../Routes/Search"

export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tv" exact component={TV} />
            <Route path="/tv/Popular" render={() => "Popular"}  />
            <Route path="/search" exact component={Search} />
            <Redirect path="*" to="/" />
        </Switch>
    </Router>
)