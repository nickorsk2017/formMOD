import React from 'react';
import {getCodeSnippet} from "../../../utils";
import {MyForm} from "examples/blog/loginForm/src/forms/MyForm/MyForm";
import {Content} from "../../../ui";
import {PART_1, SCHEME, FORM_CODE} from "./_docs";
import styles from './LoginForm.module.css';

export const LoginForm = () => {
   const _SCHEME = getCodeSnippet(SCHEME);
   const _FORM_CODE = getCodeSnippet(FORM_CODE);
   return (
      <div className={styles.container}>
        <Content content={PART_1}/>
        <MyForm/>
        <br/>
        <div className="formmod__source">
          <a href="https://github.com/nickorsk2017/formMOD/raw/master/doc/examples/blog/loginForm/formMOD-login.zip">Download example source</a>/
          <a target="_blank" href="https://github.com/nickorsk2017/formMOD/tree/master/doc/examples/blog/loginForm">See example source</a>
        </div>
        <div className="formmod__subtitle">Form scheme</div>
        <Content minWidth="700px" countLines={_SCHEME.countLines} preWrap={true} content={_SCHEME.result}/>
        <div className="formmod__subtitle">Form component</div>
        <Content minWidth="750px" countLines={_FORM_CODE.countLines}  preWrap={true} content={_FORM_CODE.result}/>
      </div>
    )
}
  