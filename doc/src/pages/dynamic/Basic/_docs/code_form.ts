export default (() => {
    const code = `import React from 'react'
import {useFormMod, useCountRender, Types} from "formmod";
import {TextInput, Button} from "../ui";
import FORM_SCHEME from "./scheme";
import styles from './Dynamic.module.css';
    
export function Dynamic() {
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
            validate(true, (valid: boolean, formValue: any) => {
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
                deleteGroupItem({inputName: "hobbies", groupControlId: groupItem.id});
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
                getGroup("hobbies").map((input: Types.ControlGroupValue, index: number) => {
                    return <TextInput
                        key={input.id}
                        label={\'Hobby \${index + 1}\'}
                        value={getValue("hobbies", input.id)}
                        error={getError("hobbies", input.id)}
                        onChange={(value: string) => setValue("hobbies", value, false, input.id)}
                    />
                })
                }
                <div className={styles.buttons}>
                    <Button onClick={deleteLastHobby} theme="RED" title="Delete last hobby"/>
                    <Button onClick={addNewHobby} theme="LIGHT" title="Add new hobby"/>
                </div>
    
                <div className={styles.buttons}>
                    <Button type="submit" title="Submit"/>
                    <Button theme="LIGHT" onClick={setDefault} title="Reset"/>
                </div>
        </form>
        )
}`;

    return code;
})()