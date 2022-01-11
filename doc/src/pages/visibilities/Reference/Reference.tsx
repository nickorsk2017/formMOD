import React from 'react'
import {getCodeSnippet} from "../../../utils";
import {Content} from "../../../ui";
import {
    PART_1,
    PART_2,
    PART_3,
    PART_4,
    FORM_CODE,
    SCHEME,
    INPUT_CODE,
} from "./_docs";
import {VisibilitiesReferencedForm} from "../../../examples/";
import styles from './Reference.module.css';

export const Reference = () => {
    const _INPUT_CODE = getCodeSnippet(INPUT_CODE, 'javascript');
    const _SCHEME = getCodeSnippet(SCHEME, 'javascript');
    const _FORM_CODE = getCodeSnippet(FORM_CODE, 'javascript');
  
    return (
        <div className={styles.container}>
          <Content content={PART_1}/>
          <div className="formmod__subtitle">Live example:</div><br/>
          <VisibilitiesReferencedForm/><br/>
          <div className="formmod__subtitle">Form scheme:</div>
          <Content lines="28-34" language="json5" preWrap={true} content={_SCHEME}/>
          <br/>
          <Content content={PART_2}/>
          <br/>
          <div className="formmod__subtitle">Form component:</div>
          <Content lines="44,48,53" preWrap={true} content={_FORM_CODE}/>
          <br/>
          <Content content={PART_3}/>
          <br/>
          <div className="formmod__subtitle">Input component:</div>
          <Content lines="7-11" preWrap={true} content={_INPUT_CODE}/>
          <br/>
          <Content content={PART_4}/>
        </div>
    )
}