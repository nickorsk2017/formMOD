import React from 'react'
import {Content} from "../../../ui";
import {getCodeSnippet} from "../../../utils";
import {PART_1, PART_2, SCHEME, SCHEME_SHORT} from "./_docs";
import styles from './Custom.module.css';

export type CustomProps = {};

export const Custom = () => {
    const _SCHEME = getCodeSnippet(SCHEME);
    const _SCHEME_SHORT = getCodeSnippet(SCHEME_SHORT);

    return (
      <div className={styles.container}>
        <Content content={PART_1}/>
        <div className="formmod__subtitle">Short format</div>
        <Content minWidth="700px" preWrap={true} content={_SCHEME_SHORT.result}/>
        <div className="formmod__subtitle">Object format</div>
        <Content minWidth="700px" countLines={_SCHEME.countLines} preWrap={true} content={_SCHEME.result}/>
        <Content content={PART_2}/>
      </div>
    )
}
  