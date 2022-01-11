import React from 'react';

import {
  HashRouter as Router,
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
  CustomRule,
  ControlledDynamic,
  UncontrolledDynamic,
  IntroViewMode,
  UncontrolledViewMode,
  ControlledViewMode,
  License,
  Forms,
  Scheme,
  API,
  UncontrolledEditmode,
  ControlledEditmode,

} from "./pages";

const PREFIX = process.env.prefixMOD || "/";

const App = () => {

  return (
    <Router>
      <RouterApp/>
      <div id="appContainer">
        <a className="super-github" href="https://github.com/nickorsk2017/formMOD"><i className="fab fa-github"></i></a>
        <HelpUs/>
        <Switch>
          <Route exact strict path={PREFIX}><Introduction/></Route>
          <Route path={`${PREFIX}controlled/`}>
            <Controlled/>
          </Route>
          <Route path={`${PREFIX}uncontrolled/`}>
            <Reference />
          </Route>
  
          <Route exact strict path={`${PREFIX}rules/`}>
            <IntroductionRules/>
          </Route>
          <Route path={`${PREFIX}rules/empty/`} strict>
            <EmptyRule/>
          </Route>
          <Route path={`${PREFIX}rules/email/`} strict>
            <EmailRule/>
          </Route>

          <Route path={`${PREFIX}rules/max/`} strict>
            <MaxRule/>
          </Route>

          <Route path={`${PREFIX}rules/min/`} strict>
            <MinRule/>
          </Route>

          <Route path={`${PREFIX}rules/custom/`} strict>
            <CustomRule/>
          </Route>


          <Route path={`${PREFIX}uncontrolled-visibilities/`} strict>
            <ReferenceVisibilities/>
          </Route>

          <Route path={`${PREFIX}controlled-visibilities/`} strict>
            <ControlledVisibilities/>
          </Route>

          <Route path={`${PREFIX}controlled-dynamic/`} strict>
            <ControlledDynamic/>
          </Route>

          <Route path={`${PREFIX}uncontrolled-dynamic/`} strict>
            <UncontrolledDynamic/>
          </Route>

          <Route path={`${PREFIX}introduction-viewmode/`} strict>
            <IntroViewMode/>
          </Route>

          <Route path={`${PREFIX}uncontrolled-viewmode/`} strict>
            <UncontrolledViewMode/>
          </Route>

          <Route path={`${PREFIX}controlled-viewmode/`} strict>
            <ControlledViewMode/>
          </Route>

          <Route path={`${PREFIX}introduction-editmode/`} strict>
           
          </Route>

          <Route path={`${PREFIX}uncontrolled-editmode/`} strict>
            <UncontrolledEditmode/>
          </Route>

          <Route path={`${PREFIX}controlled-editmode/`} strict>
            <ControlledEditmode/>
          </Route>


          <Route path={`${PREFIX}license/`} strict>
            <License/>
          </Route>

          <Route path={`${PREFIX}forms/`} strict>
            <Forms/>
          </Route>

          <Route path={`${PREFIX}scheme/`} strict>
            <Scheme/>
          </Route>

          <Route path={`${PREFIX}api/`} strict>
            <API/>
          </Route>

          <Route component={Page404} />

        </Switch>
      </div>
  </Router>)
}

export default App
