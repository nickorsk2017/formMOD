import React from 'react'
import {getCodeSnippet} from "../../utils";
import {MyForm} from "examples/composite/basic/src/forms/MyForm/MyForm";
import {Content} from "../../ui";
import {
  PART_1,
  PART_2,
  PART_3,
  PART_4,
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
        <div className="formmod__subtitle">Live example</div><br/>
        <MyForm/><br/>
        <div className="formmod__source">
          <a href="https://github.com/nickorsk2017/formMOD/raw/master/doc/examples/composite/basic/formMOD-composite.zip">Download example source</a>/
          <a target="_blank" href="https://github.com/nickorsk2017/formMOD/tree/master/doc/examples/composite/basic">See example source</a>
        </div>
        <Content content={PART_2}/>
        <div className="formmod__subtitle">Composite component</div>
        <Content content={PART_3}/>
        <Content lines='22-30,32-39,41-47,102-108' minWidth="750px" countLines={_CODE_INPUT.countLines}  preWrap content={_CODE_INPUT.result}/>
        <div className="formmod__subtitle">Child component</div><br/>
        <Content content={PART_4}/>
        <Content minWidth="750px" countLines={_CODE_INPUT_CHILD.countLines}  preWrap content={_CODE_INPUT_CHILD.result}/>
      </div>
    )
}
  