import React from 'react'
import {Content} from "../../../ui";
import {getCodeSnippet} from "../../../utils";
import {BasicControledForm} from "../../../examples/";
import {
  PART_1,
  PART_2,
  PART_3,
  PART_4,
  INPUT_CODE,
  FORM_CODE,
  SCHEME
} from "./_docs";
import styles from './Controlled.module.css';

export type ControlledParams = {};

export const Controlled = () => {
  const _INPUT_CODE = getCodeSnippet(INPUT_CODE, 'javascript');
  const _FORM_CODE = getCodeSnippet(FORM_CODE, 'javascript');
  const _SCHEME = getCodeSnippet(SCHEME, 'javascript');

  return (
      <div className={styles.container}>
        <Content content={PART_1}/>
        <div className="formmod__subtitle">Live example:</div><br/>
        <BasicControledForm/>
        <br/>
        <div className="formmod__subtitle">Form component:</div>
        <Content lines='8-10, 42-53' preWrap={true} content={_FORM_CODE}/>
        <Content content={PART_2}/>
        <div className="formmod__subtitle">Form scheme:</div>
        <Content preWrap={true} content={_SCHEME}/>
        <Content content={PART_3}/>
        <div className="formmod__subtitle">Input component:</div>
        <Content lines='5, 12-13' preWrap={true} content={_INPUT_CODE}/>
        <Content content={PART_4}/><br/>
      </div>
  )
}
  