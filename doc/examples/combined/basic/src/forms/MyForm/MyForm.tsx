import React, { useMemo } from 'react';
import {useFormMod, Types} from "formmod";
import { Button, SearchInput, ItemType} from "../../ui";
import FORM_SCHEME from "./scheme";
import styles from './MyForm.module.css';

export const MyForm = () => {
    const {
        validate,
        resetForm,
        getValue,
        setValue,
        getError,
    } = useFormMod(
        FORM_SCHEME,
    );
    
    const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        if(event && event.preventDefault) {
			event.preventDefault();
		}
        validate(true, (valid: boolean | null, formValue: Types.FormValue) => {
            if(valid) {
                // here you can send a request or call callback function
                alert('Form is valid');
                console.log(formValue, 'RESULT TRUE');
            } else {
                alert('Form is wrong');
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

    const items = useMemo(() => [
          {
            id: "1",
            value: {
                name: "Kelvin",
                lastName: "Harrison Jr"
            }
          },
          {
            id: "2",
            value: {
                name: "Jenna",
                lastName: "Ortega"
            }
          },
          {
            id: "3",
            value: {
                name: "Da’Vine",
                lastName: "Joy Randolph"
            }
          },
          {
            id: "4",
            value: {
                name: "Rina",
                lastName: "Sawayama"
            }
          },
          {
            id: "5",
            value: {
                name: "Lewis",
                lastName: "Pullman"
            }
          },
    ],[]);

    // getter a string value from item of component
    const getterItemString = (item: ItemType) => {
        return `${item.value.name} ${item.value.lastName}`
    };

    return (
        <form onSubmit={handlerSubmit} className={styles.form}>
            <SearchInput
                label="Search student"
                selectedItem={getValue("student") as ItemType}
                items={items}
                onChangeItem={(item: ItemType) => setValue("student", item)}
                onReset={() => {setValue("student", "", {
                    skipValidation: true
                })}}
                error={getError("student")}
                getterItemStringValue={getterItemString}
            />
            <div className={styles.buttons}>
                <Button type="submit" title="Submit"/>
                <Button theme="LIGHT" onClick={setDefault} title="Reset"/>
            </div>
        </form>
    )
}