import React from 'react'
import {getCodeSnippet} from "../../../utils";
import {Content} from "../../../ui";
import {
    PART_1,
    PART_2,
    PART_3,
    SCHEME,
    FORM_CODE,
    PARENT,
} from "./_docs";
import {Edit} from "./form/Edit";
import styles from './Reference.module.css';

export const Reference = () => {
    const _SCHEME = getCodeSnippet(SCHEME);
    const _FORM_CODE = getCodeSnippet(FORM_CODE);
    const _PARENT = getCodeSnippet(PARENT);
  
    return (
        <div className={styles.container}>
          <Content content={PART_1}/>
          <div className="formmod__subtitle">Live example:</div><br/>
          <Edit/><br/>
          <div className="formmod__subtitle">Parent component:</div>
          <Content content={PART_2}/>
          <Content countLines={_PARENT.countLines} lines="6-20, 22" preWrap={true} content={_PARENT.result}/>
          <br/>
          <div className="formmod__subtitle">Form scheme:</div>
          <Content countLines={_SCHEME.countLines} language="json5" preWrap={true} content={_SCHEME.result}/>
          <br/>
          <div className="formmod__subtitle">Form component:</div>
          <Content content={PART_3}/>
          <Content countLines={_FORM_CODE.countLines} lines="19, 24-26" preWrap={true} content={_FORM_CODE.result}/>
        </div>
    )
}