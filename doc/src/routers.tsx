import React, {useEffect, useRef} from 'react';
import {Route, useLocation, Switch } from "react-router-dom";
import {Page404} from "./ui";
import {
    Introduction,
    Installation,
    Basic,
    Reference,
    IntroductionRules,
    ControlledVisibilities,
    ReferenceVisibilities,
    EmptyRule,
    EmailRule,
    MaxRule,
    MinRule,
    CustomRule,
    ControlledDynamic,
    UncontrolledDynamic,
    UncontrolledViewMode,
    ControlledViewMode,
    License,
    Forms,
    Scheme,
    API,
    UncontrolledEditmode,
    ControlledEditmode,
    Issues,
    SmartIntro,
    Combined,
  } from "./pages";

const PREFIX = process.env.prefixMOD || "/";

export const Routers = () => {
    const contentRef = useRef<null | HTMLDivElement>(null);
    let location = useLocation();
    useEffect(() => {
      if(contentRef.current){
        contentRef.current.scrollTo(0, 0);
      }
    }, [location.pathname, contentRef]);
    
    return (
      <div ref={contentRef} className='content'>
        <Switch>
            <Route exact strict path={PREFIX}><Introduction/></Route>
            <Route exact strict path={`${PREFIX}installation/`}><Installation/></Route>
            <Route path={`${PREFIX}basic/`}>
              <Basic/>
            </Route>
            <Route path={`${PREFIX}smart/`}>
              <Reference />
            </Route>

            <Route exact strict path={`${PREFIX}rules/`}>
              <IntroductionRules/>
            </Route>
            <Route path={`${PREFIX}rules/empty/`} strict>
              <EmptyRule/>
            </Route>
            <Route path={`${PREFIX}rules/email/`} strict>
              <EmailRule/>
            </Route>

            <Route path={`${PREFIX}rules/max/`} strict>
              <MaxRule/>
            </Route>

            <Route path={`${PREFIX}rules/min/`} strict>
              <MinRule/>
            </Route>

            <Route path={`${PREFIX}rules/custom/`} strict>
              <CustomRule/>
            </Route>


            <Route path={`${PREFIX}smart-visibilities/`} strict>
              <ReferenceVisibilities/>
            </Route>

            <Route path={`${PREFIX}visibilities/`} strict>
              <ControlledVisibilities/>
            </Route>

            <Route path={`${PREFIX}dynamic/`} strict>
              <ControlledDynamic/>
            </Route>

            <Route path={`${PREFIX}smart-dynamic/`} strict>
              <UncontrolledDynamic/>
            </Route>

            <Route path={`${PREFIX}smart-viewmode/`} strict>
              <UncontrolledViewMode/>
            </Route>

            <Route path={`${PREFIX}viewmode/`} strict>
              <ControlledViewMode/>
            </Route>

            <Route path={`${PREFIX}smart-editmode/`} strict>
              <UncontrolledEditmode/>
            </Route>

            <Route path={`${PREFIX}smart-introduction/`} strict>
              <SmartIntro/>
            </Route>

            <Route path={`${PREFIX}editmode/`} strict>
              <ControlledEditmode/>
            </Route>

            <Route path={`${PREFIX}license/`} strict>
              <License/>
            </Route>

            <Route path={`${PREFIX}forms/`} strict>
              <Forms/>
            </Route>

            <Route path={`${PREFIX}scheme/`} strict>
              <Scheme/>
            </Route>

            <Route path={`${PREFIX}combined/`} strict>
              <Combined/>
            </Route>

            <Route path={`${PREFIX}api/`} strict>
              <API/>
            </Route>

            <Route path={`${PREFIX}issues/`} strict>
              <Issues/>
            </Route>

            <Route component={Page404} />
        </Switch>
      </div>
    )
}
