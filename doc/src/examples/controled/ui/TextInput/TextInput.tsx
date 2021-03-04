import React from 'react'
import {useRef} from "react";
import styles from './TextInput.module.css';

export function TextInput(props: any) {
    const {error, onChange, value, label} = props;
    let timerHandler: ReturnType<typeof setTimeout> | null = null;
    const inputRef = useRef<any>(null);

    if(inputRef && inputRef.current && inputRef.current.value !== value){
      inputRef.current.value = value;
    }
    const onChangeHandler = (e: any) => {
      if(timerHandler){
        clearTimeout(timerHandler);
      }
      const cachedValue = e.target.value;
      timerHandler = setTimeout(() => {
        onChange(cachedValue);
      }, 300);
    }
    const onBlur = (e: any) => {
      if(timerHandler){
        clearTimeout(timerHandler);
      }
      onChange(e.target.value);
    }
    return (
      <div className={styles.textInput}>
        {label && <label className={styles.label}>{label}</label>}
        <input className={styles.input} onBlur={onBlur} onChange={onChangeHandler} defaultValue={value} ref={inputRef}/>
        {error && <span className={styles.error}>{error}</span>}
      </div>
    )
}
  