import React from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Home from "../Routes/Home"
import TV from "../Routes/TV"
import Detail from "../Routes/Detail"
import Search from "../Routes/Search"
import Header from "./Header";

export default () => (
    <Router>
        <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            {/* @SEE do not use exact for /movie/:id/companies */}
            <Route path="/movie/:id" component={Detail} />
            
            <Route path="/tv" exact component={TV} />
            <Route path="/tv/test" render={() => "test render called"}  />
            <Route path="/search" exact component={Search} />
            <Redirect path="*" to="/" />
        </Switch>
    </Router>
)