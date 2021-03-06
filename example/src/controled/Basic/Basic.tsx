import React from 'react'
import {useFormMod, useCountRender} from "formmod";
import {TextInput, Button} from "../ui";
import FORM_SCHEME from "./scheme";
import styles from './Basic.module.css';

export function Basic() {
    const {setValue, getValue, getError, validate, resetForm} = useFormMod(
        FORM_SCHEME,
        false
    );
    
    const handleSubmit = function(event: any){
        console.log("handleSubmit");
        if(event && event.preventDefault) {
			event.preventDefault();
		}
        validate(true, (valid: boolean, formValue: any) => {
            if(valid) {
                console.log(formValue, 'RESULT TRUE');
            } else {
                console.log(formValue, 'RESULT FALSE');
            }
        });
    }
    console.log('render!!', getValue("first_name"));

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
                label={"First name"}
                value={getValue("first_name")}
                error={getError("first_name")}
                onChange={(value: string) => setValue("first_name", value)}
            />
             <TextInput
                label={"Last name"}
                value={getValue("last_name")}
                error={getError("last_name")}
                onChange={(value: string) => setValue("last_name", value)}
            />
            <div className={styles.buttons}>
                <Button type="submit" title="Submit"/>
                <Button theme="LIGHT" onClick={setDefault} title="Reset"/>
            </div>
        </form>
    )
}