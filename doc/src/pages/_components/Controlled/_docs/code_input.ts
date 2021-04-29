export default (() => {
    const code = `
    //Control component

    import React from 'react'
    import {useRef} from "react";
    import {useOptimisationControl} from "./useOptimisationControl";
    import styles from './TextInput.module.css';
    
    export function TextInput(props: any) {
        const {error, onChange, value, label} = props;
        const inputRef = useRef<any>(null);
        // optimisation of input element
        const {
            onChangeOptimized,
            onBlurOptimized
        } = useOptimisationInput({onChange, value, inputRef});

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