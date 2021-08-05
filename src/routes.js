import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home  from "./pages/home/index";
import Calculadora from "./pages/calculadora/index";
import Orsamento from "./pages/orsamento/index"

const Routes = () => (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/calculadora">
                    <Calculadora />
                </Route>
                <Route path="/orcamento">
                    <Orsamento />
                </Route>
            </Switch>   
        </BrowserRouter>
);
export default Routes;