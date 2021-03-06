import React from 'react'
import {useFormMod, useCountRender} from "formmod";
import {TextInput, Button} from "../ui";
import FORM_SCHEME from "./scheme";
import styles from './Basic.module.css';

export function Basic() {
    const {validate, resetForm, useRefMod} = useFormMod(
        FORM_SCHEME
    );
    
    const handleSubmit = (event: React.SyntheticEvent) => {
        if(event && event.preventDefault) {
			event.preventDefault();
		}
        validate(true, (valid: boolean, formValue: any) => {
            if(valid) {
                console.log(formValue, 'Form is valid');
            } else {
                console.log(formValue, 'Form is not valid');
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
            {<TextInput
                label={"Favorite pet"}
                refMod={useRefMod("petName")}
            />}
            <div className={styles.buttons}>
                <Button type="submit" title="Submit"/>
                <Button theme="LIGHT" onClick={setDefault} title="Reset"/>
            </div>
        </form>
    )
}