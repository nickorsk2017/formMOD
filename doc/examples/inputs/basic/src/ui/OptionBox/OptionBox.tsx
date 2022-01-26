import React from 'react';
import styles from './OptionBox.module.css';

export interface ComponentProps_OptionBox {
  id: string,
  label?: string;
  style?: React.CSSProperties;
  prefixJSX?: React.ReactNode;
  sufixJSX?: React.ReactNode;
  error: string | null,
  onChange: (value: boolean) => void,
  value: boolean,
  viewMode?: boolean,
}

export const OptionBox: React.FC<ComponentProps_OptionBox> = (props: ComponentProps_OptionBox) =>  {
    const {error, value, label, style, prefixJSX, sufixJSX, id, viewMode, onChange} = props;
    const isChecked = value;
    const PREFIX_PUBLIC = process.env.prefixPublic || "/";
    
    return (
      <>
        <div style={style} className={[(viewMode ? styles.viewMode : null), styles.checkBoxContainer].join(" ")}>
          <div className={[styles.checkBoxInputSpec, (isChecked ? styles.checked : null)].join(' ')}>
            <input id={id} checked={value} value={id} onChange={() => !viewMode && onChange(!value)}  className={styles.checkBoxInput} type="checkbox"></input>
            <img alt="option img" src={`${PREFIX_PUBLIC}checked.svg`} className={styles.checkBoxInputIcon}/>
          </div>
        
          <label htmlFor={id} className={styles.checkBoxLabel}>
            {prefixJSX}
            <span className={styles.checkBoxLabelText}>{label}</span>
            {sufixJSX}
          </label>
          
        </div>
        {error && <span className={styles.error}>{error}</span>}
      </>
    )
}
  