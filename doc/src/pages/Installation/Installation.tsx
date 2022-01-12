import React from 'react'
import {Content} from "../../ui";
import {PART_1} from "./docs";
import styles from './Installation.module.css';

export type InstallationParams = {};

export const Installation = () => {
    //const {} = props;

    return (
      <div className={styles.container}>
        <Content content={PART_1}/>
        npm install:
        <div className={styles.terminal}>
        npm i formmod
        </div><br/>
        yarn install: 
        <br/>
        <div className={styles.terminal}>
          yarn add formmod
        </div><br/>
        <div className='formmod__subtitle'>
        Dependencies
        </div><br/>
        <div className={styles.formmod__dep}>
          "lodash": "^4.5.0",<br/>
          "react": "^17.0.1",<br/>
          "react-dom": "^17.0.1"<br/>
        </div>
      </div>
    )
}
  