import React from 'react'
import {useFormMod, useCountRender, Types} from "formmod";
import {TextInput, Button, OptionBox} from "../ui";
import FORM_SCHEME from "./scheme";
import styles from './Edit.module.css';

export function Form({initValue}: any) {
    const {
        setValue,
        getValue,
        getError,
        validate,
        resetForm,
        getGroup,
        isViewMode,
        getItemByIndex,
        deleteGroupItem,
        addGroupItem,
        setViewMode,
        isVisible,
        setValues,
    } = useFormMod(
        FORM_SCHEME
    );

    // edit mode here
    if(initValue){
        setValues(initValue, {init: true});
    }
    
    const handlerSubmit = function(event: any){
        if(event && event.preventDefault) {
			event.preventDefault();
		}
        validate(true, (valid: boolean | null, formValue: Types.FormValue) => {
            if(valid) {
                // here you can send a request or call callback function
                console.log(formValue, 'RESULT TRUE');
                setViewMode(true);
            } else {
                console.log(formValue, 'RESULT FALSE');
            }
        });
    }

    const setDefault = (event: any) => {
        if(event && event.preventDefault) {
			event.preventDefault();
		}
        resetForm();
    };

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

    const edit = () => {
        setViewMode(false);
    };

    // count of render
    const {getCountRender, counter} = useCountRender();
    counter();
    // count of render [END]
        
    return (
        <form onSubmit={handlerSubmit} className={styles.form}>
            <div className={styles.count}>Count render: {getCountRender()}</div>
            <TextInput
                label={"First name"}
                value={getValue("first_name")}
                error={getError("first_name")}
                viewMode={isViewMode()}
                onChange={(value: string) => setValue("first_name", value)}
            />
             <TextInput
                label={"Last name"}
                value={getValue("last_name")}
                error={getError("last_name")}
                viewMode={isViewMode()}
                onChange={(value: string) => setValue("last_name", value)}
            />
            <OptionBox
                label={"Do you have pets?"}
                value={getValue("havePets") as boolean}
                error={getError("havePets")}
                viewMode={isViewMode()}
                onChange={(value: boolean) => setValue("havePets", value)}
                id="havePets"
            />
            <TextInput
                label={"Pet names"}
                value={getValue("petName")}
                error={getError("petName")}
                visible={isVisible("petName")}
                viewMode={isViewMode()}
                onChange={(value: string) => setValue("petName", value)}
            />
            <OptionBox
                label={"Do you have hobbies?"}
                value={getValue("haveHobbies") as boolean}
                error={getError("haveHobbies")}
                viewMode={isViewMode()}
                onChange={(value: boolean) => setValue("haveHobbies", value)}
                id="haveHobbies"
            />
            {
            getGroup("hobbies").map((input: Types.InputGroupValue, index: number) => {
                return <TextInput
                    key={input.id}
                    label={`Hobby ${index}`}
                    value={getValue("hobbies", {inputId: input.id})}
                    error={getError("hobbies", {inputId: input.id})}
                    visible={isVisible("hobbies")}
                    viewMode={isViewMode()}
                    onChange={(value: string) => setValue("hobbies", value, {
                        skipUpdate: false,
                        inputId: input.id
                    })}
                />
            })
            }
            {getValue("haveHobbies") && !isViewMode() && getGroup("hobbies") && <div className={styles.buttons}>
                {getGroup("hobbies").length > 0 && <Button onClick={deleteLastHobby} theme="RED" title="Delete last hobby"/>}
                <Button onClick={addNewHobby} theme="LIGHT" title="Add new hobby"/>
            </div>}
            <TextInput
                label={"Address"}
                value={getValue("address")}
                error={getError("address")}
                viewMode={isViewMode()}
                onChange={(value: string) => setValue("address", value)}
            />
            {!isViewMode() && <div className={styles.buttons}>
                <Button type="submit" title="Submit"/>
                <Button theme="LIGHT" onClick={setDefault} title="Reset"/>
            </div>}
            {isViewMode() && <div className={styles.buttons}>
                <Button onClick={edit} title="Edit"/>
            </div>}
    </form>
    )
}