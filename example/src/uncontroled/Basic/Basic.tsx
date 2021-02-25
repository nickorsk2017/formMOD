import React from 'react'
import {useFormMod, useCountRender} from "formmod";
import {TextInput, OptionBox, Button} from "../ui";
import FORM_SCHEME from "./scheme";
import styles from './Basic.module.css';

export function Basic() {
    const {validate, resetForm, useRefmod} = useFormMod(
        FORM_SCHEME,
        true
    );
    
    const handleSubmit = (event: React.SyntheticEvent) => {
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
    };
    console.log('render!!');

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
            <div className={styles.buttons}>
                <Button type="submit" title="Submit"/>
                <Button theme="LIGHT" onClick={setDefault} title="Reset"/>
            </div>
        </form>
    )
}