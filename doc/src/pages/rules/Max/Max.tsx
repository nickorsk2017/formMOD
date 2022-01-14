import React from 'react'
import {Content} from "../../../ui";
import {getCodeSnippet} from "../../../utils";
import {PART_1, PART_2, SCHEME} from "./_docs";
import styles from './Max.module.css';

export type MaxParams = {};

export const Max = () => {
    const _SCHEME = getCodeSnippet(SCHEME);

    return (
      <div className={styles.container}>
        <Content content={PART_1}/>
        <div className="formmod__subtitle">Format:</div>
        <Content preWrap={true} content={_SCHEME.result}/>
        <Content content={PART_2}/>
      </div>
    )
}
  