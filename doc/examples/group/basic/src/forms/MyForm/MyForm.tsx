import React from 'react';
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
        resetForm,
        getGroup,
        getItemByIndex,
        deleteGroupItem,
        addGroupItem,
    } = useFormMod(
        FORM_SCHEME
    );

    const setDefault = (event: any) => {
        if(event && event.preventDefault) {
			event.preventDefault();
		}
        resetForm();
    };
    
    const handlerSubmit = function(event: any){
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

    const deleteLastHobby = () => {
        const groupItem = getItemByIndex({inputName: "hobbies", index: getGroup("hobbies").length - 1});
        if(groupItem){
            deleteGroupItem({inputName: "hobbies", groupInputId: groupItem.id});
        }
    };

    const addNewHobby = () => {
        addGroupItem({inputName: "hobbies", value: {
                id: new Date().getTime(),
                value: ""
            }
        });
    };

        
    return (
        <form onSubmit={handlerSubmit} className={styles.form}>
            <div className={styles.title}>My hobbies</div>
            {
            getGroup("hobbies").map((input: Types.InputGroupValue, index: number) => {
                return <TextInput
                    key={input.id}
                    label={`hobby ${index + 1}`}
                    value={getValue("hobbies", {inputId: input.id})}
                    error={getError("hobbies", {inputId: input.id})}
                    onChange={(value: string) => setValue("hobbies", value, {
                        skipUpdate: false,
                        inputId: input.id
                    })}
                />
            })
            }
            <div className={[styles.buttons, !getGroup("hobbies").length ? styles.oneButton : ""].join(" ")}>
                {getGroup("hobbies").length > 0 && <Button onClick={deleteLastHobby} theme="RED" title="Delete last hobby"/>}
                <Button onClick={addNewHobby} theme="LIGHT" title="Add hobby"/>
            </div>

            <div className={styles.buttons}>
                <Button type="submit" title="Submit"/>
                <Button theme="LIGHT" onClick={setDefault} title="Reset"/>
            </div>
    </form>
    )
}