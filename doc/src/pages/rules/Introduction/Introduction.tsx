import React from 'react'
import {Content} from "../../../ui";
import {getCodeSnippet} from "../../../utils";
import {PART_1, PART_2, SCHEME} from "./_docs";
import styles from './Introduction.module.css';

export type IntroductionProps = {};

export const Introduction = () => {
    const _SCHEME = getCodeSnippet(SCHEME);

    return (
      <div className={styles.container}>
        <Content content={PART_1}/>
        <div className="formmod__subtitle">Form scheme</div>
        <Content minWidth="700px" countLines={_SCHEME.countLines} preWrap={true} content={_SCHEME.result}/>
        <Content content={PART_2}/>
      </div>
    )
}
  