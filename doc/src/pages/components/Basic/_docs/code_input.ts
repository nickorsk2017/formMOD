export default (() => {
    const code = `import React, {useCallback} from 'react'
import styles from './TextInput.module.css';
    
export function TextInput(props: any) {
    const {error, onChange, value, label} = props;
  
    return (
      <div className={styles.textInput}>
          {label && <label className={styles.label}>{label}</label>}
            <input
                className={styles.input}
                onChange={onChange}
                value={value}
            />
          {error && <span className={styles.error}>{error}</span>}
      </div>
    )
}`;

  return code;
})()