import React from 'react'
import {Content} from "../../ui";
import {PART_1, PART_2} from "./_docs";
import styles from './Forms.module.css';

export type FormsParams = {};

export const Forms = () => {
    //const {} = props;

    return (
      <div className={styles.container}>
        <Content content={PART_1}/>
        <div className="formmod__subtitle">Form with controlled controls:</div><br/>
        <Content content={PART_2}/>
        
      </div>
    )
}
  