export default (() => {
    const code = `
    import React, {useRef} from 'react'
    import {useOptimisationInput} from "./useOptimisationInput";
    import styles from './TextInput.module.css';
    
    export function TextInput(props: any) {
        const {error, onChange, value, label} = props;
        const inputRef = useRef<any>(null);
        // Optional, for rendering after time delay.
        const {onChangeOptimized, onBlurOptimized} = useOptimisationInput(
            {onChange, value, inputRef}
        );
        return (
          <div className={styles.textInput}>
            {label && <label className={styles.label}>{label}</label>}
            <input
                className={styles.input}
                onBlur={onBlurOptimized}
                onChange={onChangeOptimized}
                defaultValue={value}
                ref={inputRef}
            />
            {error && <span className={styles.error}>{error}</span>}
          </div>
        )
    }`;

    return code;
})()