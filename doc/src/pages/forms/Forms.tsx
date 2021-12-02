import React from 'react'
import {Content} from "../../ui";
import CONTENT from "./doc";
import styles from './Forms.module.css';

export type FormsParams = {};

export const Forms = () => {
    //const {} = props;

    return (
      <div className={styles.container}>
        <Content content={CONTENT}/>
      </div>
    )
}
  