import React from 'react';
import {getCodeSnippet} from "../../../utils";
import {Content} from "../../../ui";
import {PART_1, EXAMPLE_PART_1, EXAMPLE_PART_2, EXAMPLE_PART_3} from "./_docs";
import styles from './DataConverters.module.css';

export const DataConverters = () => {
    const _EXAMPLE_PART_1 = getCodeSnippet(EXAMPLE_PART_1);
    const _EXAMPLE_PART_2 = getCodeSnippet(EXAMPLE_PART_2);
    const _EXAMPLE_PART_3 = getCodeSnippet(EXAMPLE_PART_3);

    return (
      <div className={styles.container}>
        <Content content={PART_1}/>
        The formMOD uses simple data structure in scheme.<br/>
        This makes the operations of the system easier and more understandable.<br/>
        Because a origin data have difficult structure and extra fields - you should to use data converters.<br/><br/>

        Use the <b>cloneDeep</b> helper to securely clone data.<br/><br/>
 
        <div className="formmod__subtitle">Example</div>
        <Content minWidth="750px" countLines={_EXAMPLE_PART_1.countLines} preWrap={true} content={_EXAMPLE_PART_1.result}/>
        <br/>
        <b>Converters</b><br/>
        <Content minWidth="750px" countLines={_EXAMPLE_PART_2.countLines} preWrap={true} content={_EXAMPLE_PART_2.result}/>
        <br/>
        <b>Inside parent component</b><br/>
        <Content minWidth="750px" countLines={_EXAMPLE_PART_3.countLines} preWrap={true} content={_EXAMPLE_PART_3.result}/>
        <br/><br/>
      </div>
    )
}
  