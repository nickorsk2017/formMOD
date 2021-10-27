export default (() => {
    const code = `import React from 'react';
    import {Types} from "formmod";
    import styles from './TextInput.module.css';
    
    export const TextInput = (props: {label: string, refMod: Types.useRefModResult, controlId?: number | string}) => {
        const {refMod, label, controlId} = props;
 
        return (
          <div className={styles.textInput}>
            {label && <label className={styles.label}>{label}</label>}
            <input className={styles.input} control-id={controlId} ref={refMod.ref}/>
            {refMod.getError({controlId}) && <span className={styles.error}>{refMod.getError()}</span>}
          </div>
        )
    }
      `;

    return code;
})()