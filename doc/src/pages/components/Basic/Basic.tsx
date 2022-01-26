import React from 'react'
import {Content} from "../../../ui";
import {getCodeSnippet} from "../../../utils";
import {MyForm} from "examples/inputs/basic/src/forms/MyForm/MyForm";
import {
  PART_1,
  PART_2,
  PART_3,
  PART_4,
  INPUT_CODE,
  FORM_CODE,
  SCHEME
} from "./_docs";
import styles from './Basic.module.css';

export type ControlledParams = {};

export const Basic = () => {
  const _INPUT_CODE = getCodeSnippet(INPUT_CODE);
  const _FORM_CODE = getCodeSnippet(FORM_CODE);
  const _SCHEME = getCodeSnippet(SCHEME);

  return (
      <div className={styles.container}>
        <Content content={PART_1}/>
        <div className="formmod__subtitle">Live example:</div><br/>
        <MyForm/>
        <br/>
        <div className="formmod__subtitle">Form scheme:</div>
        <Content countLines={_SCHEME.countLines} preWrap={true} content={_SCHEME.result}/>
        <Content content={PART_3}/>
        <div className="formmod__subtitle">Form component:</div>
        <Content content={PART_2}/>
        <Content countLines={_FORM_CODE.countLines} lines='8-10, 42-53' preWrap={true} content={_FORM_CODE.result}/>
        <div className="formmod__subtitle">Input component:</div>
        <Content content={PART_4}/><br/>
        <Content countLines={_INPUT_CODE.countLines} lines='5, 12-13' preWrap={true} content={_INPUT_CODE.result}/>
      </div>
  )
}
  