import React, {memo, useState, useEffect} from 'react';
import {
    NavLink,
    useHistory
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
    const history = useHistory();
    const usePrism = () =>  setTimeout(() => {
      (window as any).Prism.highlightAll();
    }, 0);
    usePrism();

    useEffect(() => {
      const itemsStr = localStorage.getItem("opendItems");
      if(itemsStr){
        setOpendItems(JSON.parse(itemsStr));
      }
    }, []);
    useEffect(() => {
     // setActiveRootMenu(history.location);
     localStorage.setItem("opendItems", JSON.stringify(opendItems));
    }, [opendItems]);

    useEffect(() => {
      return history.listen(() => {
        usePrism();
      });
    }, [history]);
    
    return (
        <nav id="app-nav">
        <img className={styles.logo} alt="img" src="./public/formModLogo.svg"/>

        <div className={styles.selfItem}>
          <NavLink exact={true} activeClassName="active" to="/">Introduction</NavLink>
        </div>

        <div className={styles.selfItem}>
          <NavLink exact={true} activeClassName="active" to="/forms">Forms</NavLink>
        </div>

        <div className={styles.selfItem}>
          <NavLink exact={true} activeClassName="active" to="/scheme">Form scheme</NavLink>
        </div>
        
        <div className={styles.section}>
          <div onClick={() => toggleMenuItem("basicSection")} className={[checkOpendItems("basicSection") ? styles.sectionNavOpened : null, styles.sectionNav].join(" ")}>Types of controls <i className={[checkOpendItems("basicSection") ? styles.sectionIconOpened : null, styles.sectionIcon, "fas fa-angle-right"].join(" ")}></i> </div>
          <ul className={[checkOpendItems("basicSection") ? styles.sectionSpecOpened : null, styles.sectionSpec].join(" ")}>
            {checkOpendItems("basicSection") && 
            <>
              <li className={styles.navItem}>
                <NavLink activeClassName="active" to="/uncontrolled">Uncontrolled</NavLink>
              </li>
                <li className={styles.navItem}>
                <NavLink to="/controlled">Controlled</NavLink>
              </li>
            </>}
          </ul>
        </div>

        <div className={styles.section}>
          <div onClick={() => toggleMenuItem("rules")} className={[checkOpendItems("rules") ? styles.sectionNavOpened : null, styles.sectionNav].join(" ")}>
              Validation form
              <i className={[checkOpendItems("rules") ? styles.sectionIconOpened : null, styles.sectionIcon, "fas fa-angle-right"].join(" ")}></i> 
            </div>
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
                <NavLink activeClassName="active" to="/uncontrolled-visibilities">Uncontrolled</NavLink>
              </li>
                <li className={styles.navItem}>
                <NavLink to="/controlled-visibilities">Controlled</NavLink>
              </li>
            </>}
          </ul>
        </div>

        <div className={styles.section}>
          <div onClick={() => toggleMenuItem("dynamic")} className={[checkOpendItems("dynamic") ? styles.sectionNavOpened : null, styles.sectionNav].join(" ")}>Group controls<i className={[checkOpendItems("dynamic") ? styles.sectionIconOpened : null, styles.sectionIcon, "fas fa-angle-right"].join(" ")}></i> </div>
          <ul className={[checkOpendItems("dynamic") ? styles.sectionSpecOpened : null, styles.sectionSpec].join(" ")}>
            {checkOpendItems("dynamic") && 
            <>
              <li className={styles.navItem}>
                <NavLink activeClassName="active" to="/uncontrolled-dynamic">Uncontrolled</NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink to="/controlled-dynamic">Controlled</NavLink>
              </li>
            </>}
          </ul>
        </div>

        <div className={styles.section}>
          <div onClick={() => toggleMenuItem("viewmode")} className={[checkOpendItems("viewmode") ? styles.sectionNavOpened : null, styles.sectionNav].join(" ")}>View mode<i className={[checkOpendItems("viewmode") ? styles.sectionIconOpened : null, styles.sectionIcon, "fas fa-angle-right"].join(" ")}></i> </div>
          <ul className={[checkOpendItems("viewmode") ? styles.sectionSpecOpened : null, styles.sectionSpec].join(" ")}>
            {checkOpendItems("viewmode") && 
            <>
              <li className={styles.navItem}>
                <NavLink activeClassName="active" to="/introduction-viewmode">Introduction</NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink activeClassName="active" to="/uncontrolled-viewmode">Uncontrolled</NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink to="/controlled-viewmode">Controlled</NavLink>
              </li>
            </>}
          </ul>
        </div>

        <div className={styles.section}>
          <div onClick={() => toggleMenuItem("editmode")} className={[checkOpendItems("editmode") ? styles.sectionNavOpened : null, styles.sectionNav].join(" ")}>Edit mode<i className={[checkOpendItems("editmode") ? styles.sectionIconOpened : null, styles.sectionIcon, "fas fa-angle-right"].join(" ")}></i> </div>
          <ul className={[checkOpendItems("editmode") ? styles.sectionSpecOpened : null, styles.sectionSpec].join(" ")}>
            {checkOpendItems("editmode") && 
            <>
              <li className={styles.navItem}>
                <NavLink activeClassName="active" to="/uncontrolled-editmode">Uncontrolled</NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink to="/controlled-editmode">Controlled</NavLink>
              </li>
            </>}
          </ul>
        </div>

        <div className={styles.selfItem}>
          <NavLink exact={true} activeClassName="active" to="/api">API</NavLink>
        </div>

        <div className={styles.selfItem}>
          <NavLink exact={true} activeClassName="active" to="/license">License</NavLink>
        </div>

        
      </nav>
    )
})