import React from 'react'
import {getCodeSnippet} from "../../utils";
import {Content} from "../../ui";
import {PART_1, SCHEME} from "./docs";
import styles from './Scheme.module.css';

export type SchemeParams = {};

export const Scheme = () => {
    const _SCHEME = getCodeSnippet(SCHEME, 'json5');

    return (
      <div className={styles.container}>
        <Content content={PART_1}/>
        <Content language="json5" preWrap={true} content={_SCHEME}/>
      </div>
    )
}
  