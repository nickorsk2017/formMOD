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
import {VisibilitiesControledForm} from "../../../examples/";
import styles from './Controlled.module.css';

export const Controlled = () => {
    const _INPUT_CODE = getCodeSnippet(INPUT_CODE, 'javascript');
    const _SCHEME = getCodeSnippet(SCHEME, 'json5');
    const _FORM_CODE = getCodeSnippet(FORM_CODE, 'javascript');
  
    return (
        <div className={styles.container}>
          <Content content={PART_1}/>
          <div className="formmod__subtitle">Live example:</div><br/>
          <VisibilitiesControledForm/><br/>
          <div className="formmod__subtitle">Form scheme:</div>
          <Content lines="28-34" language="json5" preWrap={true} content={_SCHEME}/>
          <br/>
          <Content content={PART_2}/>
          <br/>
          <div className="formmod__subtitle">Form component:</div>
          <Content lines="60" preWrap={true} content={_FORM_CODE}/>
          <br/>
          <Content content={PART_3}/>
          <br/>
          <div className="formmod__subtitle">Control component:</div>
          <Content lines="11-13" preWrap={true} content={_INPUT_CODE}/>
          <br/>
          <Content content={PART_4}/>
        </div>
    )
}