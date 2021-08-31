import React from 'react';
import {Types} from "formmod";
import './TextInput.css';

export const TextInput = (props: {label: string, refMod: Types.useRefModResult, controlId?: number | string}) => {
    const {refMod, label} = props;
    const isVisible = refMod.isVisible();

    if(!isVisible){
      return null;
    }

    return (
      <div className="text-input">
        {label && <label className="text-input__label">{label}</label>}
        <input className="text-input__input" control-id={props.controlId} ref={refMod.ref}/>
        {refMod.getError() && <span className="text-input__error">{refMod.getError()}</span>}
      </div>
    )
}
  