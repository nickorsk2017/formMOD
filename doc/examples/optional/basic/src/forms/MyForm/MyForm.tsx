import React from 'react';
import {useFormMod, Types} from "formmod";
import {TextInput, Button, OptionBox} from "../../ui";
import FORM_SCHEME from "./scheme";
import styles from './MyForm.module.css';

export function MyForm() {
    const {setValue, getValue, getError, validate, resetForm,isVisible} = useFormMod(
        FORM_SCHEME
    );
    
    const handleSubmit = function(event: any){
        if(event && event.preventDefault) {
			event.preventDefault();
		}
        validate(true, (valid: boolean | null, formValue: Types.FormValue) => {
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

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <TextInput
                label={"Your full name"}
                value={getValue("full_name")}
                error={getError("full_name")}
                onChange={(value: string) => setValue("full_name", value)}
            />
            <OptionBox
                label={"Do you have favorite pet?"}
                value={getValue("haveFavorite") as boolean}
                error={getError("haveFavorite")}
                onChange={(value: boolean) => setValue("haveFavorite", value)}
                id="haveFavorite"
            />
              <TextInput
                label={"Pet name"}
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
}