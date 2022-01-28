import React from 'react'
import {getCodeSnippet} from "../../utils";
import {Content} from "../../ui";
import {
  PART_1,
  PART_2,
  PART_3,
  IMPORTANT,
  CODE_BASIC,
  CODE_SMART,
  NOTICE_BASIC,
  NOTICE_SMART,
} from "./_docs";
import {Basic} from "./_forms/basic/Basic";
import {Uncontrolled} from "./_forms/uncontrolled/Uncontrolled";
import styles from './Forms.module.css';


export const Forms = () => {
    const _CODE_BASIC = getCodeSnippet(CODE_BASIC);
    const _CODE_SMART = getCodeSnippet(CODE_SMART);

    return (
      <div className={styles.container}>
        <Content content={PART_1}/>
        <Content content={IMPORTANT}/>
        <div className="formmod__subtitle">Form with basic inputs:</div><br/>
        <Content content={PART_2}/><br/><br/>
        <Basic/><br/>
        <h3 className='formmod__subtitle-2'>Example of basic input component:</h3>
        <Content countLines={_CODE_BASIC.countLines} preWrap={true} content={_CODE_BASIC.result}/>
        <Content content={NOTICE_BASIC}/><br/><br/><br/>
        <div className="formmod__subtitle">Form with smart inputs:</div><br/>
        <Content content={PART_3}/><br/><br/>
        <Uncontrolled/><br/>
        <h3 className='formmod__subtitle-2'>Example of smart input component:</h3>
        <Content lines='5' countLines={_CODE_SMART.countLines} preWrap={true} content={_CODE_SMART.result}/>
        <Content content={NOTICE_SMART}/>
        <br/><br/>
      </div>
    )
}
  