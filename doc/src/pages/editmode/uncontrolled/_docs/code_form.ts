export default (() => {
    const code = `import React from 'react'
    import {useFormMod, useCountRender, Types} from "formmod";
    import {TextInput, Button, OptionBox} from "../../../../examples/referenced/ui";
    import FORM_SCHEME from "./scheme";
    import styles from './Edit.module.css';
    
    export function Form(formValue: any) {
        const {
            validate,
            resetForm,
            useRefMod,
            getGroup,
            deleteGroupItem,
            addGroupItem,
            getItemByIndex,
            setViewMode,
            isViewMode,
            getValue,
            setValues
        } = useFormMod(
            FORM_SCHEME,
        );
        // edit mode here
        if(formValue){
          setValues(formValue, true);
        }
        
        const handleSubmit = (event: React.SyntheticEvent) => {
            if(event && event.preventDefault) {
                event.preventDefault();
            }
            validate(true, (valid: boolean, formValue: any) => {
                if(valid) {
                    setViewMode(true);
                    console.log(formValue, 'RESULT TRUE');
                } else {
                    console.log(formValue, 'RESULT FALSE');
                }
            });
        };
    
        const setDefault = (event: any) => {
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
    
        const edit = () => {
            setViewMode(false);
        };
    
        return (
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.count}>Count render: {getCountRender()}</div>
                <TextInput
                    label={"First name"}
                    refMod={useRefMod("first_name")}
                />
                 <TextInput
                    label={"Last name"}
                    refMod={useRefMod("last_name")}
                />
                <OptionBox
                    label={"Do you have hobbies?"}
                    refMod={useRefMod("haveHobbies")}
                    id="haveHobbies"
                />
                {
                  getGroup("hobbies").map((input: Types.ControlGroupValue, index: number) => {
                    return <TextInput
                        key={input.id}
                        inputId={input.id}
                        label={\`Hobby $\{index\}\`}
                        refMod={hobbiesRef}
                    />
                  })
                }
                {getValue("haveHobbies") && !isViewMode() && getGroup("hobbies") && <div className={styles.buttons}>
                    {getGroup("hobbies").length > 0 && <Button onClick={deleteLastHobby} theme="RED" title="Delete last hobby"/>}
                    <Button onClick={addNewHobby} theme="LIGHT" title="Add new hobby"/>
                </div>}
                {!isViewMode() && <div className={styles.buttons}>
                    <Button type="submit" title="Submit"/>
                    <Button theme="LIGHT" onClick={setDefault} title="Reset"/>
                </div>}
                {isViewMode() && <div className={styles.buttons}>
                    <Button onClick={edit} title="Edit"/>
                </div>}
            </form>
        )
    }`;

    return code;
})()