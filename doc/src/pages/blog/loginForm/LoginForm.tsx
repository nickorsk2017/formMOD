import React from 'react';
import {MyForm} from "examples/blog/loginForm/src/forms/MyForm/MyForm";
import {Content} from "../../../ui";
import {PART_1} from "./_docs";
import styles from './LoginForm.module.css';

export const LoginForm = () => {
    return (
      <div className={styles.container}>
        <Content content={PART_1}/>
        <MyForm/>
        <br/>
        <div className="formmod__source">
          <a href="https://github.com/nickorsk2017/formMOD/raw/master/doc/examples/blog/loginForm/formMOD-login.zip">Download example source</a>/
          <a target="_blank" href="https://github.com/nickorsk2017/formMOD/tree/master/doc/examples/blog/loginForm">See example source</a>
        </div>
      </div>
    )
}
  