import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {RouterApp} from "./router";
import {Introduction, Controlled, Reference} from "./pages";

const App = () => {
  return (
    <Router>
      <RouterApp/>
      <div id="appContainer">
        <a className="super-github" href="https://github.com/nickorsk2017/formMOD"><i className="fab fa-github"></i></a>
        <Switch>
          <Route exact strict path="/"><Introduction/></Route>
          <Route path="/controlled">
            <Controlled/>
          </Route>
          <Route path="/uncontrolled">
            <Reference />
          </Route>

          <Route path="/roules/email">
             Empty
          </Route>

          <Route path="/roules/empty">
            Empty
          </Route>

          <Route path="/roules/custom">
            Empty
          </Route>

          <Route path="/roules/max">
            Empty
          </Route>

          <Route path="/roules/min">
            Empty
          </Route>

        </Switch>
      </div>
  </Router>)
}

export default App
