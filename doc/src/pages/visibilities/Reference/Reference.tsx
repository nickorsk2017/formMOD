import React from 'react'
import {getCodeSnippet} from "../../../utils";
import {Content} from "../../../ui";
import {
    PART_1,
    SCHEME
} from "./_docs";
import {VisibilitiesReferencedForm} from "../../../examples/";
import styles from './Reference.module.css';

export const Reference = () => {
    const _SCHEME = getCodeSnippet(SCHEME, 'javascript');
  
    return (
        <div className={styles.container}>
          <Content content={PART_1}/>
          <div className="formmod__subtitle">Live example:</div><br/>
          <VisibilitiesReferencedForm/><br/>
          <Content preWrap={true} content={_SCHEME}/>
          <br/>
        </div>
    )
}