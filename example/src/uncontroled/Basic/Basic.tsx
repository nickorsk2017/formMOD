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
        if(event && event.preventDefault) {
			event.preventDefault();
		}
        validate(true, (validation: any, formValue: any) => {
            if(validation) {
                console.log(formValue, 'RESULT TRUE');
            } else {
                console.log(formValue, 'RESULT FALSE');
            }
        });
    };
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
            <OptionBox
                label={"Do you have pets?"}
                refMod={useRefmod("havePets")}
                id="havePets"
            />
            {<TextInput
                label={"Pet names"}
                refMod={useRefmod("petName")}
            />}
             <TextInput
                label={"Address"}
                refMod={useRefmod("address")}
            />
            <button type="submit">Submit</button>
            <button type="button" onClick={setDefault}>Reset</button>
        </form>
    )
}