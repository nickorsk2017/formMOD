import React from 'react'
import {getCodeSnippet} from "../../utils";
import {MyForm} from "examples/combined/basic/src/forms/MyForm/MyForm";
import {Content} from "../../ui";
import {
  PART_1,
  PART_2,
  //PART_3,
  CODE_INPUT,
  CODE_INPUT_CHILD,
} from "./_docs";
import styles from './Combined.module.css';

export const Combined = () => {
    const _CODE_INPUT = getCodeSnippet(CODE_INPUT);
    const _CODE_INPUT_CHILD = getCodeSnippet(CODE_INPUT_CHILD);

    return (
      <div className={styles.container}>
        <Content content={PART_1}/>
        <div className="formmod__subtitle">Live example:</div><br/>
        <MyForm/><br/>
        <Content content={PART_2}/>
        <div className="formmod__subtitle">Combined component:</div>
        <Content countLines={_CODE_INPUT.countLines}  preWrap content={_CODE_INPUT.result}/>
        <div className="formmod__subtitle">Child UI component:</div><br/>
        <Content countLines={_CODE_INPUT_CHILD.countLines}  preWrap content={_CODE_INPUT_CHILD.result}/>
      </div>
    )
}
  