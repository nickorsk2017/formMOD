import React from 'react'
import {useFormMod, useCountRender, Types} from "formmod";
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

    // count of render
    const {getCountRender, counter} = useCountRender();
    counter();
    // count of render [END]
        
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.count}>Count render: {getCountRender()}</div>
            {
            getGroup("hobbies").map((input: Types.InputGroupValue, index: number) => {
                return <TextInput
                    key={input.id}
                    label={`Hobby ${index + 1}`}
                    value={getValue("hobbies", input.id)}
                    error={getError("hobbies", input.id)}
                    onChange={(value: string) => setValue("hobbies", value, false, input.id)}
                />
            })
            }
            <div className={styles.buttons}>
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