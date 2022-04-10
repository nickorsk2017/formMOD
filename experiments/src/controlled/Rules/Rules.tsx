import React from 'react'
import {useFormMod, Types} from "formmod";
import {TextInput, Button} from "../ui";
import FORM_SCHEME from "./scheme";
import styles from './Rules.module.css';

export function Rules() {
    const {
        setValue,
        getValue,
        getError,
        validate,
    } = useFormMod(
        FORM_SCHEME
    );
    
    const handlerSubmit = function(event: any){
        if(event && event.preventDefault) {
			event.preventDefault();
		}
        validate(true, (valid: boolean | null, formValue: Types.FormValue) => {
            if(valid) {
                // here you can send a request or call callback function
                console.log(formValue, 'RESULT TRUE');
            } else {
                console.log(formValue, 'RESULT FALSE');
            }
        });
    }
        
    return (
        <form onSubmit={handlerSubmit} className={styles.form}>
            <TextInput
                label={"Empty"}
                value={getValue("empty")}
                error={getError("empty")}
                onChange={(value: string) => setValue("empty", value)}
            />
             <TextInput
                label={"Max"}
                value={getValue("max")}
                error={getError("max")}
                onChange={(value: string) => setValue("max", value)}
            />
            <TextInput
                label={"Min"}
                value={getValue("min")}
                error={getError("min")}
                onChange={(value: string) => setValue("min", value)}
            />
            <TextInput
                label={"MaxNum"}
                type="number"
                value={getValue("maxNum")}
                error={getError("maxNum")}
                onChange={(value: string) => setValue("maxNum", value)}
            />
            <TextInput
                label={"MinNum"}
                type="number"
                value={getValue("minNum")}
                error={getError("minNum")}
                onChange={(value: string) => setValue("minNum", value)}
            />
            <TextInput
                label={"Email"}
                value={getValue("email")}
                error={getError("email")}
                onChange={(value: string) => setValue("email", value)}
            />
            <div className={styles.buttons}>
                <Button type="submit" title="Submit"/>
            </div>
    </form>
    )
}