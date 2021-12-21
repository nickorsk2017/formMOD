import React from 'react'
import {getCodeSnippet} from "../../../utils";
import {Content} from "../../../ui";
import {
    PART_1,
    PART_3,
    PART_4,
    FORM_CODE,
    SCHEME,
    INPUT_CODE,
} from "./_docs";
import {Form} from "./form/Form";
import styles from './Reference.module.css';

export const Reference = () => {
    const _INPUT_CODE = getCodeSnippet(INPUT_CODE, 'javascript');
    const _SCHEME = getCodeSnippet(SCHEME, 'javascript');
    const _FORM_CODE = getCodeSnippet(FORM_CODE, 'javascript');
  
    return (
        <div className={styles.container}>
          <Content content={PART_1}/>
          <div className="formmod__subtitle">Live example:</div><br/>
          <Form/><br/>
          <div className="formmod__subtitle">Form scheme:</div>
          <Content language="json5" preWrap={true} content={_SCHEME}/>
          <br/>
          <div className="formmod__subtitle">Form component:</div>
          <Content lines="12-13, 23, 31, 51, 55, 57, 61 " preWrap={true} content={_FORM_CODE}/>
          <br/>
          <Content content={PART_3}/>
          <br/>
          <div className="formmod__subtitle">Control component:</div>
          <Content lines="13-21" preWrap={true} content={_INPUT_CODE}/>
          <br/>
          <Content content={PART_4}/>
        </div>
    )
}