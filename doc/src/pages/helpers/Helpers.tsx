import React from 'react';
import {getCodeSnippet} from "../../utils";
import {Content} from "../../ui";
import {PART_1, EXAMPLE_1} from "./_docs";
import styles from './Helpers.module.css';

export const Helpers = () => {
    const _EXAMPLE_1 = getCodeSnippet(EXAMPLE_1);

    return (
      <div className={styles.container}>
        <Content content={PART_1}/>
        We want to help to reduce dependencies and help to make code less.<br/>
        You can avoid using bulky libraries.<br/><br/>
        <div className="formmod__subtitle">Example</div>
        <Content minWidth="750px" countLines={_EXAMPLE_1.countLines} preWrap={true} content={_EXAMPLE_1.result}/><br/>
        <b>Do not use a shallow copy (e.g. spread, Object.assign()) for objects, because its do it with a links.</b>
        <br/><br/>
      </div>
    )
}
  