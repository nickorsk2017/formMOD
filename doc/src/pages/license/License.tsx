import React from 'react'
import {Content} from "../../ui";
import CONTENT from "./doc";
import styles from './License.module.css';

export type LicenseParams = {};

export const License = () => {
    //const {} = props;

    return (
      <div className={styles.container}>
        <Content content={CONTENT}/>
      </div>
    )
}
  