import React from 'react';
import {Types} from "formmod";
import styles from './TextInput.module.css';

export const TextInput = (props: {label: string, refMod: Types.useRefModResult}) => {
    const {refMod, label} = props;
    const isVisible = refMod.isVisible();
    
    if(!isVisible){
      return null;
    }

    return (
      <div className={styles.textInput}>
        {label && <label className={styles.label}>{label}</label>}
        <input className={styles.input} ref={refMod.ref}/>
        {refMod.getError() && <span className={styles.error}>{refMod.getError()}</span>}
      </div>
    )
}
  