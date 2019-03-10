import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../home/home";
import Details from "../details/details";
import ContactUs from "../contactus/contactus";
import Login from "../Login";
import PageNotFound from "../pagenotfound/pageNotFound";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"


const Main = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/community" component={Details} />
      <Route path="/contactus" component={ContactUs} />
      <Route path="/products" component={PageNotFound} />
      <Route path="/login" component={Login} />
      <Route component={PageNotFound} />
    </Switch>
  </div>
);

export default Main;
