import React from 'react';
import { useFormMod, Types } from "formmod";
import { TextInput } from "../../ui";
import FORM_SCHEME from "./scheme";
import styles from './MyForm.module.css';

export const MyForm = () => {
    const {
        setValue,
        getValue,
        getError,
        validate,
    } = useFormMod(
        FORM_SCHEME
    );

    const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        if(event && event.preventDefault) {
			event.preventDefault();
		}
        validate(true, (valid: boolean | null, formValue: Types.FormValue) => {
            if(valid) {
                // here you can send a request or call callback function
                alert('Form is valid');
                console.log(formValue, 'RESULT TRUE');
            } else {
                alert('Form is wrong');
                console.log(formValue, 'RESULT FALSE');
            }
        });
    }
        
    return (
        <form onSubmit={handlerSubmit} className={styles.form}>
            <TextInput
                autofocus
                placeholder='Enter your name'
                label={"First name"}
                value={getValue("first_name")}
                error={getError("first_name")}
                onChange={(value: string) => setValue("first_name", value)}
            />
        </form>
    )
}