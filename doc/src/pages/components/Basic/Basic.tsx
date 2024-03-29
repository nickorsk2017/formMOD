import React from 'react'
import {Content} from "../../../ui";
import {getCodeSnippet} from "../../../utils";
import {MyForm} from "examples/inputs/basic/src/forms/MyForm/MyForm";
import {
  PART_1,
  PART_2,
  PART_3,
  FORM_CODE,
  SCHEME
} from "./_docs";
import styles from './Basic.module.css';

export type ControlledProps = {};

export const Basic = () => {
  const _FORM_CODE = getCodeSnippet(FORM_CODE);
  const _SCHEME = getCodeSnippet(SCHEME);

  return (
      <div className={styles.container}>
        <Content content={PART_1}/>
        <div className="formmod__subtitle">Live demo</div><br/>
        <MyForm/>
        <br/>
        <div className="formmod__source">
          <a href="https://github.com/nickorsk2017/formMOD/raw/master/doc/examples/inputs/basic/formMOD-input.zip">Download example source</a>/
          <a target="_blank" href="https://github.com/nickorsk2017/formMOD/tree/master/doc/examples/inputs/basic">See example source</a>
        </div>
        <div className="formmod__subtitle">Form scheme</div>
        <Content minWidth="700px" countLines={_SCHEME.countLines} preWrap={true} content={_SCHEME.result}/>
        <Content content={PART_3}/>
        <div className="formmod__subtitle">Form component</div>
        <Content content={PART_2}/>
        <Content minWidth="750px" countLines={_FORM_CODE.countLines} lines='8-10, 30-41' preWrap={true} content={_FORM_CODE.result}/>
      </div>
  )
}
  