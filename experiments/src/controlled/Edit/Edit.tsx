import React from 'react'
import { Form } from './Form'

export function Edit() {
    const formValue = {
        first_name: "",
        last_name: "Pack",
        address: "New York",
        havePets: true,
        haveHobbies: true,
        petName: "Dog",
        hobbies: [
            {
                id: "1",
                value: "fishing",
            },
            {
                id: "2",
                value: "football"
            }
        ]
    };
    return (
        <Form initValue={formValue}/>
    )
}