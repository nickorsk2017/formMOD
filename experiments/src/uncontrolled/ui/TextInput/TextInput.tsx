import React from 'react';
import {Types} from "formmod";
import styles from './TextInput.module.css';

export const TextInput = (props: {label: string, refMod: Types.useRefModResult, inputId?: number | string}) => {
    const {refMod, label} = props;
    const isVisible = refMod.isVisible();

    if(!isVisible){
      return null;
    }
    
    if(refMod.isViewMode()){
      return (
      <div className={styles.textInput}>
        {label && <label className={styles.label}>{label}</label>}
        {refMod.getValue({inputId: props.inputId})}
        {refMod.getError({inputId: props.inputId}) && <span className={styles.error}>{refMod.getError()}</span>}
      </div>
      )
    }

    return (
      <div className={styles.textInput}>
        {label && <label className={styles.label}>{label}</label>}
        <input className={styles.input} input-id={props.inputId} ref={refMod.ref}/>
        {refMod.getError({inputId: props.inputId}) && <span className={styles.error}>{refMod.getError()}</span>}
      </div>
    )
}
  