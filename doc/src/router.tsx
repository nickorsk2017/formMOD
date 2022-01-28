import React, {memo, useState, useEffect} from 'react';
import {
    NavLink
} from "react-router-dom";
import styles from './App.module.css';

export const RouterApp = memo(() => {
    const PREFIX = process.env.prefixMOD || "/";
    const PREFIX_PUBLIC = process.env.prefixPublic || "/";
    const [opendItems, setOpendItems] = useState<string[]>([]);

    const checkOpendItems = (itemID: string) => {
        return opendItems.includes(itemID);
    };

    const toggleMenuItem = (itemID: string) => {
        !opendItems.includes(itemID) ? setOpendItems([...opendItems, itemID]) : setOpendItems([...opendItems].filter(opendItem => opendItem !== itemID));
    };

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


    return (
        <nav id="app-nav">
        <NavLink activeClassName="active" to={PREFIX}><img className={styles.logo} alt="img" src={`${PREFIX_PUBLIC}formModLogo.svg`}/></NavLink>

        <div className={styles.selfItem}>
          <NavLink exact={true} activeClassName="active" to={PREFIX}>Introduction</NavLink>
        </div>

        <div className={styles.selfItem}>
          <NavLink exact={true} activeClassName="active" to={`${PREFIX}installation/`}>Installation</NavLink>
        </div>

        <div className={styles.selfItem}>
          <NavLink exact={true} activeClassName="active" to={`${PREFIX}forms/`}>Forms</NavLink>
        </div>

        <div className={styles.selfItem}>
          <NavLink exact={true} activeClassName="active" to={`${PREFIX}scheme/`}>Form scheme</NavLink>
        </div>
        
        <div className={styles.section}>
          <div onClick={() => toggleMenuItem("basicSection")} className={[checkOpendItems("basicSection") ? styles.sectionNavOpened : null, styles.sectionNav].join(" ")}>Inputs <i className={[checkOpendItems("basicSection") ? styles.sectionIconOpened : null, styles.sectionIcon, "fas fa-angle-right"].join(" ")}></i> </div>
          <ul className={[checkOpendItems("basicSection") ? styles.sectionSpecOpened : null, styles.sectionSpec].join(" ")}>
            {checkOpendItems("basicSection") && 
            <>
              <li className={styles.navItem}>
                <NavLink to={`${PREFIX}basic/`}>Basic</NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink activeClassName="active" to={`${PREFIX}smart/`}>Smart</NavLink>
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
                <NavLink exact={true} activeClassName="active" to={`${PREFIX}rules/`}>Introduction</NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink  activeClassName="active" to={`${PREFIX}rules/empty/`}>empty</NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink activeClassName="active" to={`${PREFIX}rules/email/`}>email</NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink activeClassName="active" to={`${PREFIX}rules/custom/`}>custom</NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink activeClassName="active" to={`${PREFIX}rules/max/`}>max</NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink activeClassName="active" to={`${PREFIX}rules/min/`}>min</NavLink>
              </li>
            </>}
          </ul>
        </div>

        <div className={styles.section}>
          <div onClick={() => toggleMenuItem("visibilities")} className={[checkOpendItems("visibilities") ? styles.sectionNavOpened : null, styles.sectionNav].join(" ")}>Optional inputs<i className={[checkOpendItems("visibilities") ? styles.sectionIconOpened : null, styles.sectionIcon, "fas fa-angle-right"].join(" ")}></i> </div>
          <ul className={[checkOpendItems("visibilities") ? styles.sectionSpecOpened : null, styles.sectionSpec].join(" ")}>
            {checkOpendItems("visibilities") && 
            <>
              <li className={styles.navItem}>
                <NavLink to={`${PREFIX}basic-visibilities/`}>Basic</NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink activeClassName="active" to={`${PREFIX}smart-visibilities/`}>Smart</NavLink>
              </li>
            </>}
          </ul>
        </div>

        <div className={styles.section}>
          <div onClick={() => toggleMenuItem("dynamic")} className={[checkOpendItems("dynamic") ? styles.sectionNavOpened : null, styles.sectionNav].join(" ")}>Group input<i className={[checkOpendItems("dynamic") ? styles.sectionIconOpened : null, styles.sectionIcon, "fas fa-angle-right"].join(" ")}></i> </div>
          <ul className={[checkOpendItems("dynamic") ? styles.sectionSpecOpened : null, styles.sectionSpec].join(" ")}>
            {checkOpendItems("dynamic") && 
            <>
              <li className={styles.navItem}>
                <NavLink to={`${PREFIX}basic-dynamic/`}>Basic</NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink activeClassName="active" to={`${PREFIX}smart-dynamic/`}>Smart</NavLink>
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
                <NavLink activeClassName="active" to={`${PREFIX}introduction-viewmode/`}>Introduction</NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink to={`${PREFIX}basic-viewmode/`}>Basic</NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink activeClassName="active" to={`${PREFIX}smart-viewmode/`}>Smart</NavLink>
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
                <NavLink to={`${PREFIX}basic-editmode/`}>Basic</NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink activeClassName="active" to={`${PREFIX}smart-editmode/`}>Smart</NavLink>
              </li>
            </>}
          </ul>
        </div>

        <div className={styles.selfItem}>
          <NavLink exact={true} activeClassName="active" to={`${PREFIX}api/`}>API</NavLink>
        </div>

        <div className={[styles.selfItem, styles.selfItemRed].join(" ")}>
          <NavLink exact={true} activeClassName="active" to={`${PREFIX}issues/`}>Issues</NavLink>
        </div>

        <div className={styles.selfItem}>
          <NavLink exact={true} activeClassName="active" to={`${PREFIX}license/`}>License</NavLink>
        </div>

        
      </nav>
    )
})