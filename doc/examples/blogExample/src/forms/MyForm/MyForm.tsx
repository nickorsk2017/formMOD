import React from 'react'
import {useFormMod, Types} from "formmod";
import {TextInput, Button, CheckBox} from "../../ui";
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
        isViewMode,
        getItemByIndex,
        deleteGroupItem,
        addGroupItem,
        setViewMode,
        isVisible,
    } = useFormMod(
        FORM_SCHEME
    );
    
    const handleSubmit = function(event: any){
        if(event && event.preventDefault) {
			event.preventDefault();
		}
        validate(true, (valid: boolean | null, formValue: Types.FormValue) => {
            if(valid) {
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
        
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
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
            <CheckBox
                label={"Do you have favorite pet?"}
                value={getValue("havePets") as boolean}
                error={getError("havePets")}
                viewMode={isViewMode()}
                onChange={(value: boolean) => setValue("havePets", value)}
                id="havePets"
            />
            <TextInput
                label={"Pet name"}
                value={getValue("petName")}
                error={getError("petName")}
                visible={isVisible("petName")}
                viewMode={isViewMode()}
                onChange={(value: string) => setValue("petName", value)}
            />
            <CheckBox
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
                    label={`Hobby ${index + 1}`}
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