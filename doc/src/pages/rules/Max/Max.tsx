import React from 'react'
import {Content} from "../../../ui";
import {getCodeSnippet} from "../../../utils";
import {PART_1, PART_2, SCHEME, SCHEME_SHORT, SCHEME_SHORT_NUM} from "./_docs";
import styles from './Max.module.css';

export type MaxProps = {};

export const Max = () => {
    const _SCHEME = getCodeSnippet(SCHEME);
    const _SCHEME_SHORT = getCodeSnippet(SCHEME_SHORT);
    const _SCHEME_SHORT_NUM = getCodeSnippet(SCHEME_SHORT_NUM);

    return (
      <div className={styles.container}>
        <Content content={PART_1}/>
        <div className="formmod__subtitle">Short format</div>
        <Content minWidth="700px" preWrap={true} content={_SCHEME_SHORT.result}/>
        <br/>
        <b>Comparing numeric values</b>   <br/>
        <Content minWidth="700px" preWrap={true} content={_SCHEME_SHORT_NUM.result}/>
        <div className="formmod__subtitle">Object format</div>
        <Content minWidth="700px" preWrap={true} content={_SCHEME.result}/>
        <Content content={PART_2}/>
      </div>
    )
}
  