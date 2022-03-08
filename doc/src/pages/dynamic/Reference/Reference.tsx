import React from 'react'
import {getCodeSnippet} from "../../../utils";
import {Content} from "../../../ui";
import {
    PART_1,
    PART_3,
    PART_4,
    FORM_CODE,
    SCHEME,
    INPUT_CODE,
} from "./_docs";
import {MyForm} from "examples/group/smart/src/forms/MyForm/MyForm";
import styles from './Reference.module.css';

export const Reference = () => {
    const _INPUT_CODE = getCodeSnippet(INPUT_CODE);
    const _SCHEME = getCodeSnippet(SCHEME);
    const _FORM_CODE = getCodeSnippet(FORM_CODE);
  
    return (
        <div className={styles.container}>
          <Content content={PART_1}/>
          <div className="formmod__subtitle">Live example</div><br/>
          <MyForm/><br/>
          <div className="formmod__source">
            <a href="https://github.com/nickorsk2017/formMOD/raw/master/doc/examples/group/smart/formMOD-group-smart.zip">Download example source</a>/
            <a target="_blank" href="https://github.com/nickorsk2017/formMOD/tree/master/doc/examples/group/smart">See example source</a>
          </div>
          <div className="formmod__subtitle">Form scheme</div>
          <Content countLines={_SCHEME.countLines} language="json5" preWrap={true} content={_SCHEME.result}/>
          <br/>
          <div className="formmod__subtitle">Form component</div>
          <Content content={PART_3}/>
          <Content countLines={_FORM_CODE.countLines} lines="9-15,17,49-54,56-62,68-75, 78-79, 47" preWrap={true} content={_FORM_CODE.result}/>
          <br/>
          <div className="formmod__subtitle">Input component</div>
          <Content content={PART_4}/>
          <Content countLines={_INPUT_CODE.countLines} lines="11,12" preWrap={true} content={_INPUT_CODE.result}/>
        </div>
    )
}