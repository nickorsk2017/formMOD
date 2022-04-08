export default (() => {
const code = `import React from 'react';
import styles from './TextInput.module.css';

%collapse%export type TextInputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error: string | null;
  visible?: boolean;
};%collapse%

export const TextInput = (props: TextInputProps) => {
    const {
      error,
      onChange,
      value,
      label,
      visible
    } = props;

    if(typeof visible === "boolean" && !visible){
      return null;
    }

    const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    }

    return (
      <div className={styles.textInput}>
        {label && <label className={styles.label}>{label}</label>}
        <input className={styles.input} onChange={_onChange} value={value}/>
        {error && <span className={styles.error}>{error}</span>}
      </div>
    )
}
  `;
return code;
})()