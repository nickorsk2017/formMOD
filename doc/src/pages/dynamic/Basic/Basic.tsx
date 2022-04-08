import React from 'react'
import {getCodeSnippet} from "../../../utils";
import {Content} from "../../../ui";
import {
    PART_1,
    PART_2,
    PART_3,
    PART_4,
    SCHEME,
    FORM_CODE
} from "./_docs";
import {MyForm} from "examples/group/basic/src/forms/MyForm/MyForm";
import styles from './Basic.module.css';

export const Basic = () => {
    const _SCHEME = getCodeSnippet(SCHEME);
    const _FORM_CODE = getCodeSnippet(FORM_CODE);
  
    return (
        <div className={styles.container}>
          <Content content={PART_1}/>
          <div className="formmod__subtitle">Live demo</div><br/>
          <MyForm/><br/>
          <div className="formmod__source">
            <a href="https://github.com/nickorsk2017/formMOD/raw/master/doc/examples/group/basic/formMOD-group.zip">Download example source</a>/
            <a target="_blank" href="https://github.com/nickorsk2017/formMOD/tree/master/doc/examples/group/basic">See example source</a>
          </div>
          <div className="formmod__subtitle">Form scheme</div>
          <br/>
          You don't have to do anything here.<br/>
          <Content minWidth="700px" countLines={_SCHEME.countLines} language="json5" preWrap={true} content={_SCHEME.result}/>
          <br/>
          <Content content={PART_2}/>
          <br/>
          <div className="formmod__subtitle">Form component</div>
          <Content content={PART_3}/>
          <Content minWidth="750px" countLines={_FORM_CODE.countLines} lines="8-20,45-58,61-73,75-78" preWrap={true} content={_FORM_CODE.result}/>
          <br/>
          <Content content={PART_4}/>
        </div>
    )
}