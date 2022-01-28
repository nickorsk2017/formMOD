import React from 'react'
import {Content} from "../../ui";
import CONTENT from "./doc";
import styles from './Issues.module.css';

export const Issues = () => {
    //const {} = props;

    return (
      <div className={styles.container}>
        <Content content={CONTENT}/>
      </div>
    )
}
  