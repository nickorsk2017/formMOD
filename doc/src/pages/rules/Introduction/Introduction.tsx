import React from 'react'
import {Content} from "../../../ui";
import {getCodeSnippet} from "../../../utils";
import {PART_1, PART_2, SCHEME} from "./_docs";
import styles from './Introduction.module.css';

export type IntroductionParams = {};

export const Introduction = () => {
    const _SCHEME = getCodeSnippet(SCHEME, 'javascript');

    return (
      <div className={styles.container}>
        <Content content={PART_1}/>
        <div className="formmod__subtitle">Form Scheme:</div>
        <Content preWrap={true} content={_SCHEME}/>
        <Content content={PART_2}/>
      </div>
    )
}
  