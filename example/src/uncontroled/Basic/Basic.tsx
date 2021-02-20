import React from 'react'
import {useFormMod} from "formmod";
import {TextInput, OptionBox} from "../ui";
import FORM_SCHEME from "./scheme";
import styles from './Basic.module.css';

export function Basic() {
    const {validate, resetForm, useRefmod} = useFormMod(
        FORM_SCHEME,
        true
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
    console.log('render!!');

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
                refMod={useRefmod("first_name")}
            />
             <TextInput
                label={"Last name"}
                refMod={useRefmod("last_name")}
            />
            <TextInput
                label={"Address"}
                refMod={useRefmod("address")}
            />
            <OptionBox
                label={"Do you have pets?"}
                refMod={useRefmod("havePets")}
                id="havePets"
            />
            <button type="submit">Submit</button>
            <button type="button" onClick={setDefault}>Reset</button>
        </form>
    )
}