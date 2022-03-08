import React from 'react';
import { useFormMod, Types } from "formmod";
import { CheckBox } from "../../ui";
import FORM_SCHEME from "./scheme";
import styles from './MyForm.module.css';

export const MyForm = () => {
    const {
        setValue,
        getValue,
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
            <CheckBox
                label={"Do you have favorite pet?"}
                value={getValue("haveFavorite") as boolean}
                onChange={(value: boolean) => setValue("haveFavorite", value)}
                id="haveFavorite"
            />
        </form>
    )
}