import React from 'react';
//import {useRef} from "react";
import styles from './TextInput.module.css';

export const TextInput = (props: any) => {
    const {refMod, label} = props;
    return (
      <div className={styles.textInput}>
        {label && <label className={styles.label}>{label}</label>}
        <input className={styles.input} ref={refMod.ref}/>
        {refMod.getError() && <span className={styles.error}>{refMod.getError()}</span>}
      </div>
    )
}
  