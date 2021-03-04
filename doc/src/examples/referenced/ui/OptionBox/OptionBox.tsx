import React from 'react';
import styles from './OptionBox.module.css';

export interface ComponentProps_OptionBox {
  label?: string;
  style?: React.CSSProperties;
  prefixJSX?: React.ReactNode;
  sufixJSX?: React.ReactNode;
  id: string;
  refMod: any,
}

export const OptionBox: React.FC<ComponentProps_OptionBox> = (props: ComponentProps_OptionBox) =>  {
    const {refMod, label, style, prefixJSX, sufixJSX, id} = props;
    const isChecked = refMod.getValue();
    
    return (
      <>
        <div style={style} className={styles.checkBoxContainer}>
          <div className={[styles.checkBoxInputSpec, (isChecked ? styles.checked : null)].join(' ')}>
            <input ref={refMod.ref} id={id}  className={styles.checkBoxInput} type="checkbox"></input>
            <img alt="option img" src="./checked.svg" className={styles.checkBoxInputIcon}/>
          </div>
        
          <label htmlFor={id} className={styles.checkBoxLabel}>
            {prefixJSX}
            <span className={styles.checkBoxLabelText}>{label}</span>
            {sufixJSX}
          </label>
          
        </div>
        {refMod.getError() && <span className={styles.error}>{refMod.getError()}</span>}
      </>
    )
}
  