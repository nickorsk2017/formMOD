export default (() => {
const code = `import React from 'react'
// Step 1: *import* library 
import {useFormMod, Types} from "formmod";
import {TextInput, Button} from "../../ui";
import FORM_SCHEME from "./scheme";
import styles from './MyForm.module.css';

export function MyForm() {
    // Step 2: Get an API form methods and connect scheme.
    const {
        setValue,
        getValue,
        getError,
        validate,
    } = useFormMod(
        FORM_SCHEME
    );
    
    //Step 4: Create a form submit handler
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
    
    //Step 3: Connect API methods to components
    return (
        <form onSubmit={handlerSubmit} className={styles.form}>
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
}`;

return code;
})()