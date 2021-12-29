import React from 'react'
import {useFormMod, useCountRender, Types} from "formmod";
import {TextInput, OptionBox, Button} from "../ui";
import FORM_SCHEME from "./scheme";
import styles from './Basic.module.css';

export function Basic() {
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
        getValue
    } = useFormMod(
        FORM_SCHEME,
    );
    
    const handleSubmit = (event: React.SyntheticEvent) => {
        if(event && event.preventDefault) {
			event.preventDefault();
		}
        validate(true, (valid: boolean | null, formValue: Types.FormValue) => {
            if(valid) {
                setViewMode(true);
                console.log(formValue, 'RESULT TRUE');
            } else {
                console.log(formValue, 'RESULT FALSE');
            }
        });
    };
    console.log('render!!');

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
        console.log(groupItem, 'groupItem')
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
                label={"Do you have pets?"}
                refMod={useRefMod("havePets")}
                id="havePets"
            />
            {<TextInput
                label={"Pet names"}
                refMod={useRefMod("petName")}
            />}
            <OptionBox
                label={"Do you have hobbies?"}
                refMod={useRefMod("haveHobbies")}
                id="haveHobbies"
            />
            {
              getGroup("hobbies").map((input: Types.InputGroupValue, index: number) => {
                return <TextInput
                    key={input.id}
                    inputId={input.id}
                    label={`Hobby ${index}`}
                    refMod={hobbiesRef}
                />
              })
            }
            {getValue("haveHobbies") && !isViewMode() && getGroup("hobbies") && <div className={styles.buttons}>
                {getGroup("hobbies").length > 0 && <Button onClick={deleteLastHobby} theme="RED" title="Delete last hobby"/>}
                <Button onClick={addNewHobby} theme="LIGHT" title="Add new hobby"/>
            </div>}
             <TextInput
                label={"Address"}
                refMod={useRefMod("address")}
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