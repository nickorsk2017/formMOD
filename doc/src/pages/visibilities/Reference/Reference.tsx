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
    const _INPUT_CODE = getCodeSnippet(INPUT_CODE);
    const _SCHEME = getCodeSnippet(SCHEME);
    const _FORM_CODE = getCodeSnippet(FORM_CODE);
  
    return (
        <div className={styles.container}>
          <Content content={PART_1}/>
          <div className="formmod__subtitle">Live example:</div><br/>
          <VisibilitiesReferencedForm/><br/>
          <div className="formmod__subtitle">Form scheme:</div>
          <Content countLines={_SCHEME.countLines} lines="28-34" language="json5" preWrap={true} content={_SCHEME.result}/>
          <br/>
          <Content content={PART_2}/>
          <br/>
          <div className="formmod__subtitle">Form component:</div>
          <Content countLines={_FORM_CODE.countLines} lines="44,48,53" preWrap={true} content={_FORM_CODE.result}/>
          <br/>
          <Content content={PART_3}/>
          <br/>
          <div className="formmod__subtitle">Input component:</div>
          <Content countLines={_INPUT_CODE.countLines} lines="7-11" preWrap={true} content={_INPUT_CODE.result}/>
          <br/>
          <Content content={PART_4}/>
        </div>
    )
}