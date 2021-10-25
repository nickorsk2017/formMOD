import React from 'react'
import {useFormMod, useCountRender, Types} from "formmod";
import {TextInput, Button, OptionBox} from "../ui";
import FORM_SCHEME from "./scheme";
import styles from './Basic.module.css';

export function Basic() {
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
        console.log("handleSubmit");
        if(event && event.preventDefault) {
			event.preventDefault();
		}
        validate(true, (valid: boolean, formValue: any) => {
            if(valid) {
                console.log(formValue, 'RESULT TRUE');
                setViewMode(true);
            } else {
                console.log(formValue, 'RESULT FALSE');
            }
        });
    }
    console.log('render!!');

    const setDefault = (event: any) => {
        if(event && event.preventDefault) {
			event.preventDefault();
		}
        resetForm();
    };

    const deleteLastHobby = () => {
        const groupItem = getItemByIndex({controlName: "hobbies", index: getGroup("hobbies").length - 1});
        if(groupItem){
            deleteGroupItem({controlName: "hobbies", groupControlId: groupItem.id});
        }
    };

    const addNewHobby = () => {
        addGroupItem({controlName: "hobbies", value: {
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
        <form onSubmit={handleSubmit} className={styles.form}>
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
            getGroup("hobbies").map((control: Types.ControlGroupValue, index: number) => {
                return <TextInput
                    key={control.id}
                    label={`Hobby ${index}`}
                    value={getValue("hobbies", control.id)}
                    error={getError("hobbies", control.id)}
                    visible={isVisible("hobbies")}
                    viewMode={isViewMode()}
                    onChange={(value: string) => setValue("hobbies", value, false, control.id)}
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