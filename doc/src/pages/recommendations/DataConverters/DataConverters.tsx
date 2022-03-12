import React from 'react';
import {getCodeSnippet} from "../../../utils";
import {Content} from "../../../ui";
import {PART_1, EXAMPLE_1, EXAMPLE_2} from "./_docs";
import styles from './DataConverters.module.css';

export const DataConverters = () => {
    const _EXAMPLE_1 = getCodeSnippet(EXAMPLE_1);
    const _EXAMPLE_2 = getCodeSnippet(EXAMPLE_2);

    return (
      <div className={styles.container}>
        <Content content={PART_1}/>
        The formMOD uses simple data structure in scheme.<br/>
        This makes the operations of the system easier and more understandable.<br/>
        Because a data from origin have other structure and extra fields - you might use data converters.<br/><br/>
 
        <div className="formmod__subtitle">Example</div>
        <Content minWidth="750px" countLines={_EXAMPLE_1.countLines} preWrap={true} content={_EXAMPLE_1.result}/>
        <div className="formmod__subtitle">Converters</div>
        <Content minWidth="750px" countLines={_EXAMPLE_2.countLines} preWrap={true} content={_EXAMPLE_2.result}/>
        <br/>
        Use cloneDeep helper for safe making new data.
        <br/><br/>
      </div>
    )
}
  