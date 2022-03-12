import React, {memo, useState, useEffect} from 'react';
import {
    NavLink
} from "react-router-dom";
import styles from './App.module.css';

export const MenuApp = memo(() => {
    const PREFIX = process.env.prefixMOD || "/";
    const PREFIX_PUBLIC = process.env.prefixPublic || "/";
    const [opendItems, setOpendItems] = useState<string[]>([]);
    const widthWin = window.screen.width;
    const [openedMenu, setOpenedMenu] = useState(widthWin <= 820 ? false : true);
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
        <nav id="app-nav" className={openedMenu ? '' : 'closed'}>
          <div className='mobile-menu'>
            <span onClick={() => setOpenedMenu(!openedMenu)} className="fas fa-bars"></span> 
          </div>
          <div className='menu-items'>
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
                      <NavLink to={`${PREFIX}visibilities/`}>Optional</NavLink>
                    </li>

                    <li className={styles.navItem}>
                      <NavLink to={`${PREFIX}dynamic/`}>Group</NavLink>
                    </li>

                    <li className={styles.navItem}>
                      <NavLink to={`${PREFIX}combined/`}>Combined</NavLink>
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
                      <NavLink to={`${PREFIX}editmode/`}>Edit / Create</NavLink>
                    </li>

                    <li className={styles.navItem}>
                      <NavLink to={`${PREFIX}viewmode/`}>View</NavLink>
                    </li>

                  </>}
                </ul>
              </div>

              <div className={styles.section}>
                <div onClick={() => toggleMenuItem("gallery")} className={[checkOpendItems("gallery") ? styles.sectionNavOpened : null, styles.sectionNav].join(" ")}>Gallery UI<i className={[checkOpendItems("gallery") ? styles.sectionIconOpened : null, styles.sectionIcon, "fas fa-angle-right"].join(" ")}></i> </div>
                <ul className={[checkOpendItems("gallery") ? styles.sectionSpecOpened : null, styles.sectionSpec].join(" ")}>
                  {checkOpendItems("gallery") && 
                  <>
                    <li className={styles.navItem}>
                      <NavLink to={`${PREFIX}gallery-textinput/`}>TextInput</NavLink>
                    </li>
                    <li className={styles.navItem}>
                      <NavLink to={`${PREFIX}gallery-textarea/`}>Textarea</NavLink>
                    </li>
                    <li className={styles.navItem}>
                      <NavLink to={`${PREFIX}gallery-checkbox/`}>Checkbox</NavLink>
                    </li>
                    <li className={styles.navItem}>
                      <NavLink to={`${PREFIX}gallery-fileinput/`}>Fileinput</NavLink>
                    </li>
                    <li className={styles.navItem}>
                      <NavLink to={`${PREFIX}gallery-searchInput/`}>SearchInput</NavLink>
                    </li>
                    <li className={styles.navItem}>
                      <NavLink to={`${PREFIX}gallery-button/`}>Button</NavLink>
                    </li>

                  </>}
                </ul>
              </div>

              <div className={styles.section}>
                <div onClick={() => toggleMenuItem("recommendations")} className={[checkOpendItems("recommendations") ? styles.sectionNavOpened : null, styles.sectionNav].join(" ")}>Recommendations<i className={[checkOpendItems("recommendations") ? styles.sectionIconOpened : null, styles.sectionIcon, "fas fa-angle-right"].join(" ")}></i> </div>
                <ul className={[checkOpendItems("recommendations") ? styles.sectionSpecOpened : null, styles.sectionSpec].join(" ")}>
                  {checkOpendItems("recommendations") && 
                  <>
                    <li className={styles.navItem}>
                      <NavLink to={`${PREFIX}recommendations/converters/`}>Use data converters</NavLink>
                    </li>

                    <li className={styles.navItem}>
                      <NavLink to={`${PREFIX}recommendations/stores/`}>Work with store</NavLink>
                    </li>

                  </>}
                </ul>
              </div>

              <div className={styles.selfItem}>
                <NavLink exact={true} activeClassName="active" to={`${PREFIX}helpers/`}>Helpers</NavLink>
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
                      <NavLink activeClassName="active" to={`${PREFIX}smart-editmode/`}>Edit / Create</NavLink>
                    </li>
                    
                    <li className={styles.navItem}>
                      <NavLink activeClassName="active" to={`${PREFIX}smart-viewmode/`}>View</NavLink>
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

          </div>

      </nav>
    )
})