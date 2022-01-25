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
    INPUT_CODE,
} from "./_docs";
import {Form} from "./form/Form";
import styles from './Controlled.module.css';

export const Controlled = () => {
    const _INPUT_CODE = getCodeSnippet(INPUT_CODE);
    const _SCHEME = getCodeSnippet(SCHEME);
    const _FORM_CODE = getCodeSnippet(FORM_CODE);
  
    return (
        <div className={styles.container}>
          <Content content={PART_1}/>
          <div className="formmod__subtitle">Live example:</div><br/>
          <Form/><br/>
          <div className="formmod__subtitle">Form scheme:</div>
          <Content countLines={_SCHEME.countLines} language="json5" preWrap={true} content={_SCHEME.result}/>
          <br/>
          <Content content={PART_2}/>
          <br/>
          <div className="formmod__subtitle">Form component:</div>
          <Content content={PART_3}/>
          <Content countLines={_FORM_CODE.countLines} lines="14-15, 17, 27,35, 58, 65, 67, 71" preWrap={true} content={_FORM_CODE.result}/>
          <br/>
          <div className="formmod__subtitle">Input component:</div>
          <Content content={PART_4}/>
          <Content countLines={_INPUT_CODE.countLines} lines="15-23" preWrap={true} content={_INPUT_CODE.result}/>
        </div>
    )
}