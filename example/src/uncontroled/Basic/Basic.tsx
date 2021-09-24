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
        validate(true, (valid: boolean, formValue: any) => {
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
        const groupItem = getItemByIndex({controlName: "hobbies", index: getGroup("hobbies").length - 1});
        console.log(groupItem, 'groupItem')
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
              getGroup("hobbies").map((control: Types.ControlGroupValue, index: number) => {
                return <TextInput
                    key={control.id}
                    controlId={control.id}
                    label={`Hobby ${index}`}
                    refMod={hobbiesRef}
                />
              })
            }
            {getValue("haveHobbies") && !isViewMode() && getGroup("hobbies") && <div className={styles.buttons}>
                {getGroup("hobbies").length > 0 && <Button onClick={deleteLastHobby} theme="RED" title="Delete last hobby"/>}
                <Button onClick={addNewHobby} theme="RED" title="Add new hobby"/>
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