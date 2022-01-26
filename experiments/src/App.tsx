import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Basic } from './controlled/Basic/Basic';
import { Edit } from './controlled/Edit/Edit';
import { Basic as BasicUncontrolled } from './uncontrolled/Basic/Basic';
import { Edit as EditUncontrolled } from './uncontrolled/Edit/Edit';
import './index.css'

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/controlled">Controlled</Link>
          </li>
          <li>
            <Link to="/uncontrolled">Uncontrolled</Link>
          </li>
          <li>
            <Link to="/edit-controlled">Edit Controlled</Link>
          </li>
          <li>
            <Link to="/edit-uncontrolled">Edit Uncontrolled</Link>
          </li>
        </ul>
    </nav>
    <div id="appContainer">
      <Switch>
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
      </Switch>
    </div>
  </Router>)
}

export default App
