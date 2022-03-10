import React from 'react';
import { useFormMod, Types } from "formmod";
import { Textarea } from "../../ui";
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

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        if(event && event.preventDefault) {
			event.preventDefault();
		}
        validate(true, (valid: boolean | null, formValue: Types.FormValue) => {
            if(valid) {
                alert('Form is valid');
                console.log(formValue, 'RESULT TRUE');
            } else {
                alert('Form is wrong');
                console.log(formValue, 'RESULT FALSE');
            }
        });
    }
        
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <Textarea
                autofocus
                placeholder='Enter description'
                label={"Description"}
                value={getValue("first_name")}
                error={getError("first_name")}
                onChange={(value: string) => setValue("first_name", value)}
            />
        </form>
    )
}