import React from 'react'
import {useFormMod} from "formmod";
import {TextInput} from "../ui";
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
        const formState = validate(true, (validation: any) => {
            if(validation.valid) {
                console.log(validation, 'valid!!');
            }
        });
        console.log(formState, 'result formState!');
    }
    console.log('render!!', getValue("first_name"));

    const setDefault = (event: any) => {
        if(event && event.preventDefault) {
			event.preventDefault();
		}
        resetForm();
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
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
            <button type="submit">Submit</button>
            <button type="button" onClick={setDefault}>Reset</button>
        </form>
    )
}