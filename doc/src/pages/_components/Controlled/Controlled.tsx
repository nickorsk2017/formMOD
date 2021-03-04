import React from 'react'
import {Content} from "../../../ui";
import CONTENT from "./doc";
import styles from './Controlled.module.css';

export type ControlledParams = {};

export const Controlled = () => {
    //const {} = props;

    return (
      <div className={styles.container}>
        <Content content={CONTENT}/>
      </div>
    )
}
  