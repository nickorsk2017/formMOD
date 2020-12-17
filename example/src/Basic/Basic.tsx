import React from 'react'
import {useFormMod} from "formmod";
import {TextInput} from "../ui";
import styles from './Basic.module.css'; 

export function Basic() {
    const {setValue, getValue, getError, validate} = useFormMod({
		validation: null,
		values: {
            first_name: "",
            last_name: "",
        },
        rules: {
            first_name: [
                {
                    name: "empty",
                    message: "first name is required"
                },
                {
                    name: "func",
                    params: {
                        func: (value: any) => {
                            return value.length > 5
                        }
                    },
                    message: "Length should be more than 5 lenght"
                }
            ],
            last_name: [
                {
                    name: "empty",
                    message: "last name is required"
                },
            ]
        }
    });
    const handleSubmit = function(event: any){
        if(event && event.preventDefault) {
			event.preventDefault();
		}
        validate(true, (validation: any) => {
            if(validation.valid) {
                console.log(validation, 'valid!!');
            }
        });
    }
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <TextInput
                label={"First name"}
                value={getValue("first_name")}
                error={getError("first_name")}
                onChange={(value: any) => setValue("first_name", value)}
            />
             <TextInput
                label={"Last name"}
                value={getValue("last_name")}
                error={getError("last_name")}
                onChange={(value: any) => setValue("last_name", value)}
            />
            <button type="submit">Submit</button>
        </form>
    )
}