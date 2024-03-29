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
    Textinput,
    Checkbox,
    Textarea,
    SearchInput,
    Button,
    Fileinput,
    DataConverters,
    Stores,
    Helpers,
    BlogExample,
    LoginForm,
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

            <Route path={`${PREFIX}optional/`} strict>
              <ControlledVisibilities/>
            </Route>

            <Route path={`${PREFIX}group/`} strict>
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

            <Route path={`${PREFIX}composite/`} strict>
              <Combined/>
            </Route>

            <Route path={`${PREFIX}api/`} strict>
              <API/>
            </Route>

            <Route path={`${PREFIX}issues/`} strict>
              <Issues/>
            </Route>

            <Route path={`${PREFIX}gallery-textinput/`} strict>
              <Textinput/>
            </Route>

            <Route path={`${PREFIX}gallery-checkbox/`} strict>
              <Checkbox/>
            </Route>

            <Route path={`${PREFIX}gallery-textarea/`} strict>
              <Textarea/>
            </Route>

            <Route path={`${PREFIX}gallery-searchInput/`} strict>
              <SearchInput/>
            </Route>

            <Route path={`${PREFIX}gallery-button/`} strict>
              <Button/>
            </Route>

            <Route path={`${PREFIX}gallery-fileinput/`} strict>
              <Fileinput/>
            </Route>

            <Route path={`${PREFIX}recommendations/converters/`} strict>
              <DataConverters/>
            </Route>

            <Route path={`${PREFIX}recommendations/stores/`} strict>
              <Stores/>
            </Route>

            <Route path={`${PREFIX}helpers`} strict>
              <Helpers/>
            </Route>

            <Route path={`${PREFIX}example`} strict>
              <BlogExample/>
            </Route>

            <Route path={`${PREFIX}login-example`} strict>
              <LoginForm/>
            </Route>

            <Route component={Page404} />
        </Switch>
      </div>
    )
}
