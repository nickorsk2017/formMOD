import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {RouterApp} from "./router";
import {Introduction} from "./pages";
import { Basic } from './controled/Basic/Basic';
import { Basic as BasicUncontroled } from './uncontroled/Basic/Basic';

const App = () => {
  return (
    <Router>
      <RouterApp/>
      <div id="appContainer">
        <Switch>
          <Route exact strict path="/"><Introduction/></Route>
          <Route path="/controlled">
            <Basic/>
          </Route>
          <Route path="/uncontrolled">
            <BasicUncontroled />
          </Route>
          <Route path="/rules">
            <BasicUncontroled />
          </Route>
        </Switch>
      </div>
  </Router>)
}

export default App
