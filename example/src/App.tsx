import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Basic } from './controled/Basic/Basic';
import { Basic as BasicUncontroled } from './uncontroled/Basic/Basic';
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
        </ul>
    </nav>
    <Switch>
      <Route path="/controlled">
        <Basic />
      </Route>
      <Route path="/uncontrolled">
        <BasicUncontroled />
      </Route>
    </Switch>
  </Router>)
}

export default App
