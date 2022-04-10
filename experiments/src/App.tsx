import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Rules} from "./controlled/Rules/Rules";
import { Basic } from './controlled/Basic/Basic';
import { Edit } from './controlled/Edit/Edit';
import { Basic as BasicUncontrolled } from './uncontrolled/Basic/Basic';
import { Edit as EditUncontrolled } from './uncontrolled/Edit/Edit';
import {Combined as CombinedBasic} from "./controlled/Combined/Combined";
import './index.css'

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/rules">Rules</Link>
          </li>
          <li>
            <Link to="/controlled">Basic</Link>
          </li>
          <li>
            <Link to="/uncontrolled">Smart</Link>
          </li>
          <li>
            <Link to="/edit-controlled">Edit</Link>
          </li>
          <li>
            <Link to="/edit-uncontrolled">Edit smart</Link>
          </li>
          <li>
            <Link to="/combined-basic">Combined basic</Link>
          </li>
        </ul>
    </nav>
    <div id="appContainer">
      <Switch>
        <Route path="/rules">
          <Rules/>
        </Route>
        <Route path="/controlled">
          <Basic />
        </Route>
        <Route path="/edit-controlled">
          <Edit />
        </Route>
        <Route path="/uncontrolled">
          <BasicUncontrolled />
        </Route>
        <Route path="/edit-uncontrolled">
          <EditUncontrolled />
        </Route>
        <Route path="/edit-uncontrolled">
          <EditUncontrolled />
        </Route>
        <Route path="/combined-basic">
          <CombinedBasic/>
        </Route>
      </Switch>
    </div>
  </Router>)
}

export default App
