export default (() => {
    const code = `
    //The referanced input example

    import React from 'react';
    import {Types} from "formmod";
    // Here used the native CSS
    // but you can use CSS modules, preprocessors and other.
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
        )
    }`;

    return code;
})()