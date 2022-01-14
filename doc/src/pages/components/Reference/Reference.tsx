import React from 'react'
import {Content} from "../../../ui";
import {
  PART_1,
  PART_2,
  PART_3,
  PART_4,
  INPUT_CODE,
  FORM_CODE,
  SCHEME
} from "./_docs";
import {getCodeSnippet} from "../../../utils";
import {BasicReferencedForm} from "../../../examples/";
import styles from './Reference.module.css';

export type ReferenceParams = {};

export const Reference = () => {
    const _INPUT_CODE = getCodeSnippet(INPUT_CODE);
    const _FORM_CODE = getCodeSnippet(FORM_CODE);
    const _SCHEME = getCodeSnippet(SCHEME);

    return (
      <div className={styles.container}>
        <Content content={PART_1}/>
        <div className="formmod__subtitle">Live example:</div><br/>
        <BasicReferencedForm/><br/>
        <div className="formmod__subtitle">Form component:</div>
        <Content countLines={_FORM_CODE.countLines} lines='8-10,44,48' preWrap={true} content={_FORM_CODE.result}/>
        <Content content={PART_2}/><br/>
        <div className="formmod__subtitle">Form scheme:</div>
        <Content countLines={_SCHEME.countLines} preWrap={true} content={_SCHEME.result}/>
        <Content content={PART_3}/><br/>
        <div className="formmod__subtitle">Input component:</div>
        <Content countLines={_INPUT_CODE.countLines} lines='8, 13, 15' preWrap={true} content={_INPUT_CODE.result}/>
        <Content content={PART_4}/><br/>
      </div>
    )
}
  