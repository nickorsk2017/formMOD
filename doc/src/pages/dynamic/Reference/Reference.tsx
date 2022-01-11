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
import {DynamicUncontrolledForm} from "../../../examples/";
import styles from './Reference.module.css';

export const Reference = () => {
    const _INPUT_CODE = getCodeSnippet(INPUT_CODE, 'javascript');
    const _SCHEME = getCodeSnippet(SCHEME, 'javascript');
    const _FORM_CODE = getCodeSnippet(FORM_CODE, 'javascript');
  
    return (
        <div className={styles.container}>
          <Content content={PART_1}/>
          <div className="formmod__subtitle">Live example:</div><br/>
          <DynamicUncontrolledForm/><br/>
          <div className="formmod__subtitle">Form scheme:</div>
          <Content language="json5" preWrap={true} content={_SCHEME}/>
          <br/>
          <div className="formmod__subtitle">Form component:</div>
          <Content lines="9-15,17,49-54,56-62,68-75, 78-79, 47" preWrap={true} content={_FORM_CODE}/>
          <br/>
          <Content content={PART_3}/>
          <br/>
          <div className="formmod__subtitle">Input component:</div>
          <Content lines="11,12" preWrap={true} content={_INPUT_CODE}/>
          <br/>
          <Content content={PART_4}/>
        </div>
    )
}