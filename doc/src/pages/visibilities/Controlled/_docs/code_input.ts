export default (() => {
    const code = `import React from 'react';
import {useOptimisationInput} from "formmod";
import {useRef} from "react";
import styles from './TextInput.module.css';
    
export function TextInput(props: any) {
      const {error, onChange, value, label, visible, viewMode} = props;
      const inputRef = useRef<any>(null);
      const {
        onChangeOptimized,
        onBlurOptimized
      } = useOptimisationInput({onChange, value, inputRef});
      
      if(visible === false){
        return null;
      }
      return (
        <div className={styles.textInput}>
          {label && <label className={styles.label}>{label}</label>}
          <input
            className={styles.input}
            onBlur={onBlurOptimized}
            onChange={onChangeOptimized} defaultValue={value}
            ref={inputRef}
          />
          {error && <span className={styles.error}>{error}</span>}
        </div>)
};`;
  return code;
})()