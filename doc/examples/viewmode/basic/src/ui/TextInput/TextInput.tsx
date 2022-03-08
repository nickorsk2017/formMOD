import React from 'react';
import styles from './TextInput.module.css';

export type TextInputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error: string | null;
  viewMode: boolean;
};

export const TextInput = (props: TextInputProps) => {
    const {
      error,
      onChange,
      value,
      label,
      viewMode
    } = props;

    const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    }

    if(viewMode){
      return (
      <div className={styles.textInput}>
        {label && <label className={styles.label}>{label}</label>}
        <div className={styles.inputDetail}>{value}</div>
        {error && <span className={styles.error}>{error}</span>}
      </div>
      )
    }

    return (
      <div className={styles.textInput}>
        {label && <label className={styles.label}>{label}</label>}
        <input className={styles.input} onChange={_onChange} value={value}/>
        {error && <span className={styles.error}>{error}</span>}
      </div>
    )
}
  