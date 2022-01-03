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
    const _INPUT_CODE = getCodeSnippet(INPUT_CODE, 'javascript');
    const _FORM_CODE = getCodeSnippet(FORM_CODE, 'javascript');
    const _SCHEME = getCodeSnippet(SCHEME, 'javascript');

    return (
      <div className={styles.container}>
        <Content content={PART_1}/>
        <div className="formmod__subtitle">Live example:</div><br/>
        <BasicReferencedForm/><br/>
        <div className="formmod__subtitle">Form component:</div>
        <Content lines='8-10,44,48' preWrap={true} content={_FORM_CODE}/>
        <Content content={PART_2}/><br/>
        <div className="formmod__subtitle">Form scheme:</div>
        <Content preWrap={true} content={_SCHEME}/>
        <Content content={PART_3}/><br/>
        <div className="formmod__subtitle">Input component:</div>
        <Content lines='11, 16, 18' preWrap={true} content={_INPUT_CODE}/>
        <Content content={PART_4}/><br/>
      </div>
    )
}
  