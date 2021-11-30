import React from 'react'
import {Content} from "../../../ui";
import {PART_1, PART_2} from "./docs";
import {Form} from "./form/Form";
import styles from './Introduction.module.css';

export type IntroductionParams = {};

export const Introduction = () => {

    return (
      <div className={styles.container}>
        <Content content={PART_1}/>
        <Form/>
        <Content content={PART_2}/>
      </div>
    )
}
  