import React from 'react'
import {Content} from "../../ui";
import CONTENT from "./doc";
import styles from './Scheme.module.css';

export type SchemeParams = {};

export const Scheme = () => {
    //const {} = props;

    return (
      <div className={styles.container}>
        <Content content={CONTENT}/>
      </div>
    )
}
  