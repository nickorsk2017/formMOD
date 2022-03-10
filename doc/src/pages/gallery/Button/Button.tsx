import React from 'react';
import {MyForm} from "examples/gallery/Button/src/forms/MyForm/MyForm";
import {Content} from "../../../ui";
import {getCodeSnippet} from "../../../utils";
import {PART_1, PART_2, INPUT_CODE} from "./_docs";
import styles from './Button.module.css';

export const Button = () => {
    const _INPUT_CODE = getCodeSnippet(INPUT_CODE);

    return (
      <div className={styles.container}>
        <Content content={PART_1}/>
        <div className="formmod__subtitle">Live example</div><br/>
        <MyForm/>
        <br/>
        <div className="formmod__source">
          <a href="https://github.com/nickorsk2017/formMOD/raw/master/doc/examples/gallery/Button/formMOD-button.zip">Download example source</a>/
          <a target="_blank" href="https://github.com/nickorsk2017/formMOD/tree/master/doc/examples/gallery/Button">See example source</a>
        </div>
        <div className="formmod__subtitle">Code</div>
        <Content minWidth="750px" countLines={_INPUT_CODE.countLines} preWrap={true} content={_INPUT_CODE.result}/>
        <Content content={PART_2}/>
      </div>
    )
}
  