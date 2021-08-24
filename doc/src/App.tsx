import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {HelpUs, Page404} from "./ui";
import {RouterApp} from "./router";
import {
  Introduction,
  Controlled,
  Reference,
  IntroductionRules,
  ControlledVisibilities,
  ReferenceVisibilities,
  EmptyRule,
  EmailRule,
  MaxRule,
  MinRule,
  CustomRule
} from "./pages";

const App = () => {
  return (
    <Router>
      <RouterApp/>
      <div id="appContainer">
        <a className="super-github" href="https://github.com/nickorsk2017/formMOD"><i className="fab fa-github"></i></a>
        <HelpUs/>
        <Switch>
          <Route exact strict path="/"><Introduction/></Route>
          <Route path="/controlled">
            <Controlled/>
          </Route>
          <Route path="/uncontrolled">
            <Reference />
          </Route>
  
          <Route exact strict path='/rules'>
            <IntroductionRules/>
          </Route>
          <Route path='/rules/empty' strict>
            <EmptyRule/>
          </Route>
          <Route path='/rules/email' strict>
            <EmailRule/>
          </Route>

          <Route path='/rules/max' strict>
            <MaxRule/>
          </Route>

          <Route path='/rules/min' strict>
            <MinRule/>
          </Route>

          <Route path='/rules/custom' strict>
            <CustomRule/>
          </Route>


          <Route path='/uncontrolled-visibilities' strict>
            <ReferenceVisibilities/>
          </Route>

          <Route path='/controlled-visibilities' strict>
            <ControlledVisibilities/>
          </Route>

          <Route component={Page404} />

        </Switch>
      </div>
  </Router>)
}

export default App
