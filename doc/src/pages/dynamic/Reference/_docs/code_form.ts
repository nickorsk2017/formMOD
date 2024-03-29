export default (() => {
    const code = `import React from 'react'
import {useFormMod, useCountRender, Types} from "formmod";
import {TextInput, Button} from "../ui";
import FORM_SCHEME from "./scheme";
import styles from './Dynamic.module.css';
    
export function Dynamic() {
    const {
        validate,
        resetForm,
        useRefMod,
        getGroup,
        deleteGroupItem,
        addGroupItem,
        getItemByIndex,
    } = useFormMod(
        FORM_SCHEME
    );
        
    const handlerSubmit = function(event: React.SyntheticEvent){
        if(event && event.preventDefault) {
                event.preventDefault();
        }
        validate(true, (valid: boolean, formValue: any) => {
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
    
        const setDefault = (event: React.SyntheticEvent) => {
            if(event && event.preventDefault) {
                event.preventDefault();
            }
            resetForm();
        };
    
        // count of render
        const {getCountRender, counter} = useCountRender();
        counter();
        // count of render [END]
    
        const hobbiesRef = useRefMod("hobbies");
    
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
                <div className={styles.count}>Count render: {getCountRender()}</div>
                {
                  getGroup("hobbies").map((input: Types.InputGroupValue, index: number) => {
                    return <TextInput
                        key={input.id}
                        inputId={input.id}
                        label={\`Hobby \${index + 1}\`}
                        refMod={hobbiesRef}
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
    }`;

    return code;
})()