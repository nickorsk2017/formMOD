import React from 'react';
import {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import { Basic } from './controled/Basic/Basic';
import { Basic as BasicUncontroled } from './uncontroled/Basic/Basic';
import styles from './App.module.css';

const App = () => {
  const [opendItems, setOpendItems] = useState<string[]>([]);

  const checkOpendItems = (itemID: string) => {
    return opendItems.includes(itemID);
  };

  const toggleMenuItem = (itemID: string) => {
    !opendItems.includes(itemID) ? setOpendItems([...opendItems, itemID]) : setOpendItems([...opendItems].filter(opendItem => opendItem !== itemID));
  };

  return (
    <Router>
      <nav id="app-nav">
        <img className={styles.logo} alt="img" src="./formModLogo.svg"/>

        <div className={styles.introduction}>
          <NavLink exact={true} activeClassName="active" to="/">Introduction</NavLink>
        </div>
        
        <div className={styles.section}>
          <div onClick={() => toggleMenuItem("basicSection")} className={[checkOpendItems("basicSection") ? styles.sectionNavOpened : null, styles.sectionNav].join(" ")}>Components  <i className={[checkOpendItems("basicSection") ? styles.sectionIconOpened : null, styles.sectionIcon, "fas fa-angle-right"].join(" ")}></i> </div>
          <ul className={[checkOpendItems("basicSection") ? styles.sectionSpecOpened : null, styles.sectionSpec].join(" ")}>
            {checkOpendItems("basicSection") && 
            <>
              <li className={styles.navItem}>
                <NavLink activeClassName="active" to="/uncontrolled">Reference</NavLink>
              </li>
                <li className={styles.navItem}>
                <NavLink to="/controlled">Controlled</NavLink>
              </li>
            </>}
          </ul>
        </div>

        <div className={styles.section}>
          <div onClick={() => toggleMenuItem("rules")} className={[checkOpendItems("rules") ? styles.sectionNavOpened : null, styles.sectionNav].join(" ")}>Rules  <i className={[checkOpendItems("rules") ? styles.sectionIconOpened : null, styles.sectionIcon, "fas fa-angle-right"].join(" ")}></i> </div>
          <ul className={[checkOpendItems("rules") ? styles.sectionSpecOpened : null, styles.sectionSpec].join(" ")}>
            {checkOpendItems("rules") && 
            <>
              <li className={styles.navItem}>
                <NavLink activeClassName="active" to="/uncontrolled">Reference</NavLink>
              </li>
                <li className={styles.navItem}>
                <NavLink to="/controlled">Controlled</NavLink>
              </li>
            </>}
          </ul>
        </div>

        <div className={styles.section}>
          <div onClick={() => toggleMenuItem("visibilities")} className={[checkOpendItems("visibilities") ? styles.sectionNavOpened : null, styles.sectionNav].join(" ")}>Visibilities  <i className={[checkOpendItems("visibilities") ? styles.sectionIconOpened : null, styles.sectionIcon, "fas fa-angle-right"].join(" ")}></i> </div>
          <ul className={[checkOpendItems("visibilities") ? styles.sectionSpecOpened : null, styles.sectionSpec].join(" ")}>
            {checkOpendItems("visibilities") && 
            <>
              <li className={styles.navItem}>
                <NavLink activeClassName="active" to="/uncontrolled">Reference</NavLink>
              </li>
                <li className={styles.navItem}>
                <NavLink to="/controlled">Controlled</NavLink>
              </li>
            </>}
          </ul>
        </div>

        
      </nav>
      <div id="appContainer">
        <Switch>
          <Route exact strict path="/"></Route>
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
