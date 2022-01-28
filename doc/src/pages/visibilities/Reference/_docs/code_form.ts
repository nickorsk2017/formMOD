export default (() => {
    const code = `import React from 'react'
import {useFormMod, useCountRender} from "formmod";
import {TextInput, Button, OptionBox} from "../ui";
import FORM_SCHEME from "./scheme";
import styles from './Visibilities.module.css';
    
export function Visibilities() {
    const {validate, resetForm, useRefMod} = useFormMod(
        FORM_SCHEME
    );
        
    const handleSubmit = (event: React.SyntheticEvent) => {
            if(event && event.preventDefault) {
                event.preventDefault();
            }
            validate(true, (valid: boolean, formValue: any) => {
                if(valid) {
                    alert('Form is valid');
                    console.log("FORM IS VALID, value:", formValue );
                } else {
                    alert('Form is wrong');
                    console.log('FORM IS WRONG, value:', formValue );
                }
            });
    };
    
    const setDefault = (event: any) => {
            if(event && event.preventDefault) {
                event.preventDefault();
            }
            resetForm();
    };
    
    // count of render
    const {getCountRender, counter} = useCountRender();
    counter();
    // count of render [END]
        
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.count}>Count render: {getCountRender()}</div>
            <TextInput
                label={"Your full name"}
                refMod={useRefMod("full_name")}
            />
            <OptionBox
                label={"Do you have favorite pet?"}
                refMod={useRefMod("haveFavorite")}
                id="haveFavorite"
            />
            {<TextInput
                label={"Pet name"}
                refMod={useRefMod("petName")}
            />}
            <div className={styles.buttons}>
                <Button type="submit" title="Submit"/>
                <Button theme="LIGHT" onClick={setDefault} title="Reset"/>
            </div>
        </form>
    )
}`;

    return code;
})()