import React from 'react'
import {getCodeSnippet} from "../../utils";
import {Content} from "../../ui";
import {PART_1, PART_2, SCHEME, IMPORTANT} from "./docs";
import styles from './Scheme.module.css';

export type SchemeParams = {};

export const Scheme = () => {
    const {result, countLines} = getCodeSnippet(SCHEME);

    return (
      <div className={styles.container}>
        <Content content={PART_1}/>
        <div className="formmod__subtitle">Example</div>
        <Content minWidth="700px" countLines={countLines} language="json5" preWrap={true} content={result}/>
        <div className="formmod__subtitle">Sections</div>
        <Content content={PART_2}/>
        <Content content={IMPORTANT}/>
      </div>
    )
}
  