import React from 'react';
import { useFormMod, Types, isEqual } from "formmod";
import FORM_SCHEME from "./scheme";
import { Fileinput, FileInputValue } from "../../ui";
import styles from './MyForm.module.css';

export const MyForm = () => {
    const {
        setValue,
        getValue,
        validate
    } = useFormMod(
        FORM_SCHEME
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
    }

    const onChange = (fileInputValue: FileInputValue) => {
        const files = getValue("files", {cloneDeep: true});
        files.push(fileInputValue);
        setValue("files", files);
    };

    const onDelete = (fileInputValue: FileInputValue) => {
        let files = getValue("files", {cloneDeep: true});
        files = files.filter((_fileInputValue: FileInputValue) => {
            return !isEqual(_fileInputValue, fileInputValue);
        });
        setValue("files", files);
    }

    return (
        <form onSubmit={handlerSubmit} className={styles.form}>
           <Fileinput files={getValue("files")} onDelete={onDelete} onChange={onChange}/>
        </form>
    )
}