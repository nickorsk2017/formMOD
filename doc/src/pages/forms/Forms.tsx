import React from 'react'
import {Content} from "../../ui";
import {PART_1, PART_2, PART_3} from "./_docs";
import {Controlled} from "./_forms/controlled/Controlled";
import {Uncontrolled} from "./_forms/uncontrolled/Uncontrolled";
import styles from './Forms.module.css';

export type FormsParams = {};

export const Forms = () => {
    //const {} = props;

    return (
      <div className={styles.container}>
        <Content content={PART_1}/>
        <div className="formmod__subtitle">Form with controlled inputs:</div><br/>
        <Content content={PART_2}/><br/><br/>
        <Controlled/><br/><br/>
        <div className="formmod__subtitle">Form with uncontrolled inputs:</div><br/>
        <Content content={PART_3}/><br/><br/>
        <Uncontrolled/><br/><br/>
      </div>
    )
}
  