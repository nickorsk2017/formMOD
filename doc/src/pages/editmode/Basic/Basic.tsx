import React from 'react'
import {getCodeSnippet} from "../../../utils";
import {Content} from "../../../ui";
import {
    PART_1,
    PART_2,
    PART_3,
    PART_4,
    SCHEME,
    FORM_CODE,
    PARENT,
} from "./_docs";
import {Edit} from "examples/editmode/basic/src/forms/MyForm/Edit";
import styles from './Basic.module.css';

export const Basic = () => {
    const _SCHEME = getCodeSnippet(SCHEME);
    const _FORM_CODE = getCodeSnippet(FORM_CODE);
    const _PARENT = getCodeSnippet(PARENT);
  
    return (
        <div className={styles.container}>
            <Content content={PART_1}/>
            <div className="formmod__subtitle">Live example</div><br/>
            <Edit/><br/>
            <div className="formmod__source">
                <a href="https://github.com/nickorsk2017/formMOD/raw/master/doc/examples/editmode/basic/formmod-editmode-basic.zip">Download example code</a>/
                <a target="_blank" href="https://github.com/nickorsk2017/formMOD/tree/master/doc/examples/editmode/basic">See example source</a>
            </div>
            <div className="formmod__subtitle">Parent component</div>
            <Content content={PART_2}/>
            <Content minWidth="750px" countLines={_PARENT.countLines} lines="11-14,16" preWrap={true} content={_PARENT.result}/>
            <br/>
            <div className="formmod__subtitle">Form scheme</div>
            <br/>
            You don't have to do anything in the scheme. 
            <Content minWidth="700px" countLines={_SCHEME.countLines} language="json5" preWrap={true} content={_SCHEME.result}/>
            <br/>
            <div className="formmod__subtitle">Form component</div>
            <Content content={PART_3}/>
            <Content minWidth="750px" countLines={_FORM_CODE.countLines} lines="18, 23-26" preWrap={true} content={_FORM_CODE.result}/>
            <div className="formmod__subtitle">Create mode</div><br/>
            <Content content={PART_4}/>
        </div>
    )
}