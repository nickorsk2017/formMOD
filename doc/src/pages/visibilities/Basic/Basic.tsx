import React from 'react'
import {getCodeSnippet} from "../../../utils";
import {Content} from "../../../ui";
import {
    PART_1,
    PART_2,
    PART_3,
    PART_4,
    SCHEME,
    FORM_CODE,
    INPUT_CODE
} from "./_docs";
import {MyForm} from "examples/optional/basic/src/forms/MyForm/MyForm";
import styles from './Basic.module.css';

export const Basic = () => {
    const _INPUT_CODE = getCodeSnippet(INPUT_CODE);
    const _SCHEME = getCodeSnippet(SCHEME);
    const _FORM_CODE = getCodeSnippet(FORM_CODE);
  
    return (
        <div className={styles.container}>
          <Content content={PART_1}/>
          <div className="formmod__subtitle">Live example:</div><br/>
          <MyForm/><br/>
          <div className="formmod__subtitle">Form scheme:</div>
          <Content content={PART_2}/>
          <Content countLines={_SCHEME.countLines} lines="28-34" language="json5" preWrap={true} content={_SCHEME.result}/>          
          <br/>
          <div className="formmod__subtitle">Form component:</div>
          <Content content={PART_3}/>
          <Content countLines={_FORM_CODE.countLines} lines="59" preWrap={true} content={_FORM_CODE.result}/>
          <br/>
          <div className="formmod__subtitle">Input component:</div>
          <Content content={PART_4}/>
          <Content countLines={_INPUT_CODE.countLines} lines="14-16" preWrap={true} content={_INPUT_CODE.result}/>
        </div>
    )
}