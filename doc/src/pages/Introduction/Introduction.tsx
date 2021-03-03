import React from 'react'
import {Content} from "../../ui";
import CONTENT from "./doc";
import styles from './Introduction.module.css';

export type IntroductionParams = {};

export const Introduction = () => {
    //const {} = props;

    return (
      <div className={styles.container}>
        <Content content={CONTENT}/>
      </div>
    )
}
  