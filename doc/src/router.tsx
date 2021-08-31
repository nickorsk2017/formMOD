import React, {memo, useState} from 'react';
import {
    NavLink
} from "react-router-dom";
import styles from './App.module.css';

export const RouterApp = memo(() => {
    const [opendItems, setOpendItems] = useState<string[]>([]);

    const checkOpendItems = (itemID: string) => {
        return opendItems.includes(itemID);
    };

    const toggleMenuItem = (itemID: string) => {
        !opendItems.includes(itemID) ? setOpendItems([...opendItems, itemID]) : setOpendItems([...opendItems].filter(opendItem => opendItem !== itemID));
    };
    
    return (
        <nav id="app-nav">
        <img className={styles.logo} alt="img" src="./public/formModLogo.svg"/>

        <div className={styles.selfItem}>
          <NavLink exact={true} activeClassName="active" to="/">Introduction</NavLink>
        </div>
        
        <div className={styles.section}>
          <div onClick={() => toggleMenuItem("basicSection")} className={[checkOpendItems("basicSection") ? styles.sectionNavOpened : null, styles.sectionNav].join(" ")}>Controls <i className={[checkOpendItems("basicSection") ? styles.sectionIconOpened : null, styles.sectionIcon, "fas fa-angle-right"].join(" ")}></i> </div>
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
                <NavLink exact={true} activeClassName="active" to="/rules">Introduction</NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink activeClassName="active" to="/rules/empty">empty</NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink activeClassName="active" to="/rules/email">email</NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink activeClassName="active" to="/rules/custom">custom</NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink activeClassName="active" to="/rules/max">max</NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink activeClassName="active" to="/rules/min">min</NavLink>
              </li>
            </>}
          </ul>
        </div>

        <div className={styles.section}>
          <div onClick={() => toggleMenuItem("visibilities")} className={[checkOpendItems("visibilities") ? styles.sectionNavOpened : null, styles.sectionNav].join(" ")}>Optional controls<i className={[checkOpendItems("visibilities") ? styles.sectionIconOpened : null, styles.sectionIcon, "fas fa-angle-right"].join(" ")}></i> </div>
          <ul className={[checkOpendItems("visibilities") ? styles.sectionSpecOpened : null, styles.sectionSpec].join(" ")}>
            {checkOpendItems("visibilities") && 
            <>
              <li className={styles.navItem}>
                <NavLink activeClassName="active" to="/uncontrolled-visibilities">Reference</NavLink>
              </li>
                <li className={styles.navItem}>
                <NavLink to="/controlled-visibilities">Controlled</NavLink>
              </li>
            </>}
          </ul>
        </div>

        <div className={styles.section}>
          <div onClick={() => toggleMenuItem("dynamic")} className={[checkOpendItems("dynamic") ? styles.sectionNavOpened : null, styles.sectionNav].join(" ")}>Dynamic forms<i className={[checkOpendItems("dynamic") ? styles.sectionIconOpened : null, styles.sectionIcon, "fas fa-angle-right"].join(" ")}></i> </div>
          <ul className={[checkOpendItems("dynamic") ? styles.sectionSpecOpened : null, styles.sectionSpec].join(" ")}>
            {checkOpendItems("dynamic") && 
            <>
              <li className={styles.navItem}>
                <NavLink activeClassName="active" to="/uncontrolled-visibilities">Reference</NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink to="/controlled-visibilities">Controlled</NavLink>
              </li>
            </>}
          </ul>
        </div>

        
      </nav>
    )
})