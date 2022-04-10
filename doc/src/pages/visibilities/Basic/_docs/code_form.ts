export default (() => {
const code = `%collapse%import React from 'react';
import {useFormMod, Types} from "formmod";
import {TextInput, Button, OptionBox} from "../../ui";
import FORM_SCHEME from "./scheme";
import styles from './MyForm.module.css';

%collapse%export function MyForm() {
    const {setValue, getValue, getError, validate, isVisible} = useFormMod(
        FORM_SCHEME
    );%collapse%
    
    const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        if(event && event.preventDefault) {
            event.preventDefault();
        }
        validate(true, (valid: boolean | null, formValue: Types.FormValue) => {
            if(valid) {
                // here you can send a request or call callback function
                alert('Form is valid');
                console.log("FORM IS VALID, value:", formValue );
            } else {
                alert('Form is wrong');
                console.log('FORM IS WRONG, value:', formValue );
            }
        });
    }

    %collapse%return (
        <form onSubmit={handlerSubmit} className={styles.form}>
            <TextInput
                label={"Your full name"}
                value={getValue("full_name")}
                error={getError("full_name")}
                onChange={(value: string) => setValue("full_name", value)}
            />
            <OptionBox
                label={"Do you have a favorite pet?"}
                value={getValue("haveFavorite") as boolean}
                error={getError("haveFavorite")}
                onChange={(value: boolean) => setValue("haveFavorite", value)}
                id="haveFavorite"
            />
            <TextInput
                label={"Pet name"}
                value={getValue("favoritePetName")}
                error={getError("favoritePetName")}
                visible={isVisible("favoritePetName")}
                onChange={(value: string) => setValue("favoritePetName", value)}
            />
            <div className={styles.buttons}>
                <Button type="submit" title="Submit"/>
            </div>
        </form>
    )
}`;

return code;
})()