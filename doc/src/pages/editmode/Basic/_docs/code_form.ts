export default (() => {
const code = `%collapse%import React from 'react';
import { useFormMod, Types } from "formmod";
import { TextInput, Button } from "../../ui";
import {ValueForm} from "./Edit";
import FORM_SCHEME from "./scheme";
import styles from './Edit.module.css';
    
type Props = {
    initValue?: ValueForm
};%collapse%
    
export const MyForm = ({initValue}: Props) => {
    const {
        setValue,
        getValue,
        getError,
        validate,
        setValues,
    } = useFormMod(
        FORM_SCHEME
    );
    
    // fill data
    if(initValue){
        setValues(initValue, {init: true});
    }
        
    %collapse%const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
                label={"First name"}
                value={getValue("first_name")}
                error={getError("first_name")}
                onChange={(value: string) => setValue("first_name", value)}
            />
            <TextInput
                label={"Last name"}
                value={getValue("last_name")}
                error={getError("last_name")}
                onChange={(value: string) => setValue("last_name", value)}
            />
            <div className={styles.buttons}>
                <Button type="submit" title="Submit"/>
            </div>
        </form>)%collapse%
    }`;

    return code;
})()