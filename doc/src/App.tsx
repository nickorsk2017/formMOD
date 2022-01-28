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
  Installation,
  Basic,
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
  Issues,
} from "./pages";

const PREFIX = process.env.prefixMOD || "/";

const App = () => {

  return (
    <Router>
      <RouterApp/>
      <div id="appContainer">
        <span className="super-github">
          <a target='_blank' className='super-github-star' href="https://github.com/nickorsk2017/formMOD">
            <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>
            Star
          </a>
          <a className="super-github-icon" href="https://github.com/nickorsk2017/formMOD"><i className="fab fa-github"></i></a>
        </span>
        <HelpUs/>
        <Switch>
          <Route exact strict path={PREFIX}><Introduction/></Route>
          <Route exact strict path={`${PREFIX}installation/`}><Installation/></Route>
          <Route path={`${PREFIX}basic/`}>
            <Basic/>
          </Route>
          <Route path={`${PREFIX}smart/`}>
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


          <Route path={`${PREFIX}smart-visibilities/`} strict>
            <ReferenceVisibilities/>
          </Route>

          <Route path={`${PREFIX}basic-visibilities/`} strict>
            <ControlledVisibilities/>
          </Route>

          <Route path={`${PREFIX}basic-dynamic/`} strict>
            <ControlledDynamic/>
          </Route>

          <Route path={`${PREFIX}smart-dynamic/`} strict>
            <UncontrolledDynamic/>
          </Route>

          <Route path={`${PREFIX}introduction-viewmode/`} strict>
            <IntroViewMode/>
          </Route>

          <Route path={`${PREFIX}smart-viewmode/`} strict>
            <UncontrolledViewMode/>
          </Route>

          <Route path={`${PREFIX}basic-viewmode/`} strict>
            <ControlledViewMode/>
          </Route>

          <Route path={`${PREFIX}introduction-editmode/`} strict>
           
          </Route>

          <Route path={`${PREFIX}smart-editmode/`} strict>
            <UncontrolledEditmode/>
          </Route>

          <Route path={`${PREFIX}basic-editmode/`} strict>
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

          <Route path={`${PREFIX}issues/`} strict>
            <Issues/>
          </Route>

          <Route component={Page404} />

        </Switch>
      </div>
  </Router>)
}

export default App
