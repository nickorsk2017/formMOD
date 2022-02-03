import React from 'react'
//import {getCodeSnippet} from "../../utils";
import {Content} from "../../ui";
import {
  PART_1,
  PART_2,
  PART_3,
} from "./_docs";
import styles from './Forms.module.css';

export const Forms = () => {

    return (
      <div className={styles.container}>
        <Content content={PART_1}/>
        <div className="formmod__subtitle">Folder structure</div><br/>
        <Content content={PART_2}/>
        <Content content={PART_3}/>
      </div>
    )
}
  