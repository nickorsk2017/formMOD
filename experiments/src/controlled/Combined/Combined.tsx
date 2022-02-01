import React, { useMemo } from 'react';
import {useFormMod, useCountRender, Types} from "formmod";
import { Button, SearchSelect} from "../ui";
import { Item } from "../ui/SearchSelect/SearchSelect";
import FORM_SCHEME from "./scheme";
import styles from './Combined.module.css';

export function Combined({formValue}: any) {
    const {
        validate,
        resetForm,
        setViewMode,
        isViewMode,
        setValues,
        getValue,
        setValue,
        getError,
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
        validate(true, (valid: boolean | null, formValue: Types.FormValue) => {
            if(valid) {
                //setViewMode(true);
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

    const edit = () => {
        setViewMode(false);
    };

    const items = useMemo(() => [
        {
            id: "1",
            value: "Student 1"
          },
          {
            id: "2",
            value: "Student 2"
          },
          {
            id: "3",
            value: "Student 3"
          },
          {
            id: "4",
            value: "Student 4"
          },
          {
            id: "5",
            value: "Student 5"
          },
    ],[]);

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.count}>Count render: {getCountRender()}</div>
            <SearchSelect
                label="Select student from list"
                selectedItem={getValue("student") as Item}
                items={items}
                onChangeItem={(item: Item) => setValue("student", item)}
                onReset={() => {setValue("student", "", undefined, undefined, true)}}
                error={getError("student")}
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