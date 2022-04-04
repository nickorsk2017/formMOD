import React from 'react';
import {useFormMod, Types} from "formmod";
import {TextInput, Button} from "../../ui";
import FORM_SCHEME from "./scheme";
import styles from './MyForm.module.css';

export function MyForm() {
    const {setValue, getValue, getError, validate, resetForm, isViewMode, setViewMode} = useFormMod(
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
                // set this form to view mode
                setViewMode(true);
            } else {
                alert('Form is wrong');
                console.log(formValue, 'RESULT FALSE');
            }
        });
    }

    const toEdit = () => {
        setViewMode(false);
    };

    const setDefault = (event: any) => {
        if(event && event.preventDefault) {
			event.preventDefault();
		}
        resetForm();
    };
        
    return (
        <form onSubmit={handlerSubmit} className={styles.form}>
            <div className={styles.title}>
                {!isViewMode() ? "New user" : "User detail"}
            </div>
            <TextInput
                label={"First name"}
                value={getValue("first_name")}
                error={getError("first_name")}
                onChange={(value: string) => setValue("first_name", value)}
                viewMode={isViewMode()}
            />
             <TextInput
                label={"Last name"}
                value={getValue("last_name")}
                error={getError("last_name")}
                onChange={(value: string) => setValue("last_name", value)}
                viewMode={isViewMode()}
            />
            {!isViewMode() && <div className={styles.buttons}>
                <Button type="submit" title="Submit"/>
                <Button theme="LIGHT" onClick={setDefault} title="Reset"/>
            </div>}
            {isViewMode() && <div className={styles.buttons}>
                <Button onClick={toEdit} title="Edit"/>
            </div>}
        </form>
    )
}