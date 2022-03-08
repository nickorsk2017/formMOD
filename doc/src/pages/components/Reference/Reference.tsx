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
import {MyForm} from "examples/inputs/smart/src/forms/MyForm/MyForm";
import styles from './Reference.module.css';

export type ReferenceProps = {};

export const Reference = () => {
    const _INPUT_CODE = getCodeSnippet(INPUT_CODE);
    const _FORM_CODE = getCodeSnippet(FORM_CODE);
    const _SCHEME = getCodeSnippet(SCHEME);

    return (
      <div className={styles.container}>
        <Content content={PART_1}/>
        <div className="formmod__subtitle">Live example</div><br/>
        <MyForm/><br/>
        <div className="formmod__source">
          <a href="https://github.com/nickorsk2017/formMOD/raw/master/doc/examples/inputs/smart/formMOD-smart-inp.zip">Download example source</a>/
          <a target="_blank" href="https://github.com/nickorsk2017/formMOD/tree/master/doc/examples/inputs/smart">See example source</a>
        </div>
        <div className="formmod__subtitle">Form scheme</div>
        <Content countLines={_SCHEME.countLines} preWrap={true} content={_SCHEME.result}/>
        <Content content={PART_3}/><br/>
        <div className="formmod__subtitle">Form component</div>
        <Content content={PART_2}/><br/>
        <Content countLines={_FORM_CODE.countLines} lines='8-10,44,48' preWrap={true} content={_FORM_CODE.result}/>
        <div className="formmod__subtitle">Input component</div>
        <Content content={PART_4}/><br/>
        <Content countLines={_INPUT_CODE.countLines} lines='6, 11, 13' preWrap={true} content={_INPUT_CODE.result}/>
      </div>
    )
}
  