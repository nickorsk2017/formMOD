import React from 'react'
import {useRef} from "react";
import {useOptimisationInput} from "./useOptimisationInput";
import styles from './TextInput.module.css';

export function TextInput(props: any) {
    const {error, onChange, value, label, visible} = props;
    const inputRef = useRef<any>(null);
    const {onChangeOptimized, onBlurOptimized} = useOptimisationInput({onChange, value, inputRef});
    console.log(visible, 'visible');
    if(typeof visible === "boolean" && !visible){
      return null;
    }
    return (
      <div className={styles.textInput}>
        {label && <label className={styles.label}>{label}</label>}
        <input className={styles.input} onBlur={onBlurOptimized} onChange={onChangeOptimized} defaultValue={value} ref={inputRef}/>
        {error && <span className={styles.error}>{error}</span>}
      </div>
    )
}
  