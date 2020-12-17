import React from 'react'
import styles from './TextInput.module.css'; 

export function TextInput(props: any) {
    const {error, onChange, value, label} = props;
    let timerHandler:any = null;

    const onChangeHandler = function(e: any){
      clearTimeout(timerHandler);
      const cachedValue = e.target.value;
      timerHandler = setTimeout(() => {
        onChange(cachedValue);
      }, 300);
    }
    return (
      <div className={styles.container}>
        {label && <label className={styles.label}>{label}</label>}
        <input className={styles.input} onChange={onChangeHandler} defaultValue={value}/>
        {error && <span className={styles.error}>{error}</span>}
      </div>
    )
}
  