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
} from "./_docs";
import {MyForm} from "examples/group/basic/src/forms/MyForm/MyForm";
import styles from './Basic.module.css';

export const Basic = () => {
    const _SCHEME = getCodeSnippet(SCHEME);
    const _FORM_CODE = getCodeSnippet(FORM_CODE);
  
    return (
        <div className={styles.container}>
          <Content content={PART_1}/>
          <div className="formmod__subtitle">Live example:</div><br/>
          <MyForm/><br/>
          <div className="formmod__subtitle">Form scheme:</div>
          <Content countLines={_SCHEME.countLines} language="json5" preWrap={true} content={_SCHEME.result}/>
          <br/>
          <Content content={PART_2}/>
          <br/>
          <div className="formmod__subtitle">Form component:</div>
          <Content content={PART_3}/>
          <Content countLines={_FORM_CODE.countLines} lines="9-17,45-50,52-58,68-78, 80-81" preWrap={true} content={_FORM_CODE.result}/>
          <br/>
          <Content content={PART_4}/>
        </div>
    )
}