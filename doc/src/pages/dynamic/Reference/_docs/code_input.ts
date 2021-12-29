export default (() => {
    const code = `import React from 'react';
    import {Types} from "formmod";
    import styles from './TextInput.module.css';
    
    export const TextInput = (props: {label: string, refMod: Types.useRefModResult, inputId?: number | string}) => {
        const {refMod, label, inputId} = props;
 
        return (
          <div className={styles.textInput}>
            {label && <label className={styles.label}>{label}</label>}
            <input className={styles.input} input-id={inputId} ref={refMod.ref}/>
            {refMod.getError({inputId}) && <span className={styles.error}>{refMod.getError()}</span>}
          </div>
        )
    }
      `;

    return code;
})()