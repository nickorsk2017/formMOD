export default (() => {
    const code = `import React from 'react';
import {useFormMod, useCountRender} from "formmod";
import {TextInput, Button, OptionBox} from "../ui";
import FORM_SCHEME from "./scheme";
import styles from './Visibilities.module.css';
    
export function Visibilities() {
        const {setValue, getValue, getError, validate, resetForm, isVisible} = useFormMod(
            FORM_SCHEME,
            false
        );
        
        const handleSubmit = function(event: any){
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
        }
    
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
                    value={getValue("full_name")}
                    error={getError("full_name")}
                    onChange={(value: string) => setValue("full_name", value)}
                />
                <OptionBox
                    label={"Do you have pets?"}
                    value={getValue("havePets") as boolean}
                    error={getError("havePets")}
                    onChange={(value: boolean) => setValue("havePets", value)}
                    id="havePets"
                />
                  <TextInput
                    label={"Favorite pet"}
                    value={getValue("petName")}
                    error={getError("petName")}
                    visible={isVisible("petName")}
                    onChange={(value: string) => setValue("petName", value)}
                />
                <div className={styles.buttons}>
                    <Button type="submit" title="Submit"/>
                    <Button theme="LIGHT" onClick={setDefault} title="Reset"/>
                </div>
            </form>
        )
}`;

    return code;
})()