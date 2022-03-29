import React from 'react';
import {useDebounce} from "formmod";
import {useRef} from "react";
import styles from './TextInput.module.css';

export function TextInput(props: any) {
    const {error, onChange, value, label, visible, viewMode, autoFocus, type} = props;
    const inputRef = useRef<any>(null);
    const {onChangeOptimized, onBlurOptimized} = useDebounce({onChange, value, inputRef});

    if(typeof visible === "boolean" && !visible){
      return null;
    }

    if(viewMode){
      return (
      <div className={styles.textInput}>
        {label && <label className={styles.label}>{label}</label>}
        {value}
        {error && <span className={styles.error}>{error}</span>}
      </div>
      )
    }
    
    return (
      <div className={styles.textInput}>
        {label && <label className={styles.label}>{label}</label>}
        <input autoFocus={autoFocus} type={type || "text"} className={styles.input} onBlur={onBlurOptimized} onChange={onChangeOptimized} defaultValue={value} ref={inputRef}/>
        {error && <span className={styles.error}>{error}</span>}
      </div>
    )
}
  