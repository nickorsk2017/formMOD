import React from 'react'
import {Content} from "../../../ui";
import {
  PART_1,
  PART_2,
  PART_3,
  PART_4,
  CODE_INPUT,
  CODE_FORM,
  SCHEME
} from "./_docs";
import {getCodeSnippet} from "../../../utils";
import {BasicReferencedForm} from "../../../examples/";
import styles from './Reference.module.css';

export type ReferenceParams = {};

export const Reference = () => {
    const _CODE_INPUT = getCodeSnippet(CODE_INPUT, 'javascript');
    const _CODE_FORM = getCodeSnippet(CODE_FORM, 'javascript');
    const _SCHEME = getCodeSnippet(SCHEME, 'javascript');

    return (
      <div className={styles.container}>
        <Content content={PART_1}/>
        <div className="formmod__subtitle">Live example:</div><br/>
        <BasicReferencedForm/><br/>
        <div className="formmod__subtitle">Form code:</div>
        <Content preWrap={true} content={_CODE_FORM}/>
        <Content content={PART_2}/><br/>
        <div className="formmod__subtitle">Form scheme:</div>
        <Content preWrap={true} content={_SCHEME}/>
        <Content content={PART_3}/><br/>
        <div className="formmod__subtitle">Control code:</div>
        <Content preWrap={true} content={_CODE_INPUT}/>
        <Content content={PART_4}/><br/>
      </div>
    )
}
  