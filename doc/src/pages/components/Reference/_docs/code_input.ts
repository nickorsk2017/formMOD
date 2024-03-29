export default (() => {
const code = `import React from 'react';
import {Types} from "formmod";
import './TextInput.css';

export const TextInput = (props: {label: string, refMod: Types.useRefModResult}) => {
    const {refMod, label} = props;
        
    return (
    <div className="text-input">
        {label && <label className="text-input__label">{label}</label>}
        <input className="text-input__input" ref={refMod.ref}/>
        {refMod.getError() &&
            <span className="text-input__error">{refMod.getError()}</span>
        }
    </div>
)}`;

    return code;
})()