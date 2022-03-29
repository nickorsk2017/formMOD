import React from 'react'
import {useFormMod, Types} from "formmod";
import {TextInput, Button} from "../../ui";
import FORM_SCHEME from "./scheme";
import styles from './MyForm.module.css';

export function MyForm() {
    const {
        setValue,
        getValue,
        getError,
        validate,
    } = useFormMod(
        FORM_SCHEME
    );
    
    const handleSubmit = function(event: any){
        if(event && event.preventDefault) {
			event.preventDefault();
		}
        validate(true, (valid: boolean | null, formValue: Types.FormValue) => {
            if(valid) {
                console.log(formValue, 'RESULT TRUE');
            } else {
                console.log(formValue, 'RESULT FALSE');
            }
        });
    }
        
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <TextInput
                label={"Email"}
                value={getValue("email")}
                error={getError("email")}
                onChange={(value: string) => setValue("email", value)}
            />
            <TextInput
                type="password"
                label={"Password"}
                value={getValue("password")}
                error={getError("password")}
                onChange={(value: string) => setValue("password", value)}
            />
            
            <div className={styles.buttons}>
                <Button type="submit" title="Submit"/>
            </div>
    </form>
    )
}