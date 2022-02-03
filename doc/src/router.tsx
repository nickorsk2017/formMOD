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
          <div onClick={() => toggleMenuItem("formInputs")} className={[checkOpendItems("formInputs") ? styles.sectionNavOpened : null, styles.sectionNav].join(" ")}>Form inputs<i className={[checkOpendItems("formInputs") ? styles.sectionIconOpened : null, styles.sectionIcon, "fas fa-angle-right"].join(" ")}></i> </div>
          <ul className={[checkOpendItems("formInputs") ? styles.sectionSpecOpened : null, styles.sectionSpec].join(" ")}>
            {checkOpendItems("formInputs") && 
            <>
              <li className={styles.navItem}>
                <NavLink to={`${PREFIX}basic/`}>Basic</NavLink>
              </li>

              <li className={styles.navItem}>
                <NavLink to={`${PREFIX}basic-visibilities/`}>Optional</NavLink>
              </li>

              <li className={styles.navItem}>
                <NavLink to={`${PREFIX}basic-dynamic/`}>Group</NavLink>
              </li>

            </>}
          </ul>
        </div>
    

        <div className={styles.section}>
          <div onClick={() => toggleMenuItem("rules")} className={[checkOpendItems("rules") ? styles.sectionNavOpened : null, styles.sectionNav].join(" ")}>
              Validation rules
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
          <div onClick={() => toggleMenuItem("crud")} className={[checkOpendItems("crud") ? styles.sectionNavOpened : null, styles.sectionNav].join(" ")}>CRUD<i className={[checkOpendItems("crud") ? styles.sectionIconOpened : null, styles.sectionIcon, "fas fa-angle-right"].join(" ")}></i> </div>
          <ul className={[checkOpendItems("crud") ? styles.sectionSpecOpened : null, styles.sectionSpec].join(" ")}>
            {checkOpendItems("crud") && 
            <>
              <li className={styles.navItem}>
                <NavLink to={`${PREFIX}basic-viewmode/`}>View</NavLink>
              </li>

              <li className={styles.navItem}>
                <NavLink to={`${PREFIX}basic-editmode/`}>Edit / Create</NavLink>
              </li>

            </>}
          </ul>
        </div>

        <div className={styles.section}>
          <div onClick={() => toggleMenuItem("smartInput")} className={[checkOpendItems("smartInput") ? styles.sectionNavOpened : null, styles.sectionNav].join(" ")}>Smart inputs (experiment) <i className={[checkOpendItems("smartInput") ? styles.sectionIconOpened : null, styles.sectionIcon, "fas fa-angle-right"].join(" ")}></i> </div>
          <ul className={[checkOpendItems("smartInput") ? styles.sectionSpecOpened : null, styles.sectionSpec].join(" ")}>
            {checkOpendItems("smartInput") && 
            <>
              <li className={styles.navItem}>
                <NavLink activeClassName="active" to={`${PREFIX}smart-introduction/`}>Introduction</NavLink>
              </li>

              <li className={styles.navItem}>
                <NavLink activeClassName="active" to={`${PREFIX}smart/`}>Basic</NavLink>
              </li>

              <li className={styles.navItem}>
                <NavLink activeClassName="active" to={`${PREFIX}smart-visibilities/`}>Optional</NavLink>
              </li>

              <li className={styles.navItem}>
                <NavLink activeClassName="active" to={`${PREFIX}smart-dynamic/`}>Group</NavLink>
              </li>

              <li className={styles.navItem}>
                <NavLink activeClassName="active" to={`${PREFIX}smart-viewmode/`}>View</NavLink>
              </li>

              <li className={styles.navItem}>
                <NavLink activeClassName="active" to={`${PREFIX}smart-editmode/`}>Edit / Create</NavLink>
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