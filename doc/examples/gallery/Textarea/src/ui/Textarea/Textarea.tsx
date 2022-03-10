import React from 'react';
import styles from './Textarea.module.css';

export type TextareaProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error: string | null;
  placeholder?: string;
  autofocus?: boolean;
  rows?: number;
};

export const Textarea = (props: TextareaProps) => {
    const {
      error,
      onChange,
      value,
      label,
      placeholder,
      autofocus,
      rows,
    } = props;

    const _onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange(e.target.value);
    }

    return (
      <div className={styles.textInput}>
        {label && <label className={styles.label}>{label}</label>}
        <textarea rows={rows} autoFocus={autofocus} placeholder={placeholder} className={styles.input} onChange={_onChange} value={value}/>
        {error && <span className={styles.error}>{error}</span>}
      </div>
    )
}

Textarea.defaultProps = {
  rows: 6, 
}