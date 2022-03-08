import React from 'react';
import styles from './TextInput.module.css';

export type TextInputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error: string | null;
  placeholder?: string;
  autofocus?: boolean;
};

export const TextInput = (props: TextInputProps) => {
    const {
      error,
      onChange,
      value,
      label,
      placeholder,
      autofocus,
    } = props;

    const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    }

    return (
      <div className={styles.textInput}>
        {label && <label className={styles.label}>{label}</label>}
        <input autoFocus={autofocus} placeholder={placeholder} className={styles.input} onChange={_onChange} value={value}/>
        {error && <span className={styles.error}>{error}</span>}
      </div>
    )
}
  