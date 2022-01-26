import React from 'react'
import { Form } from './Form'

export function Edit() {
    const formvalue = {
        first_name: "Jack",
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
        <Form formValue={formvalue}/>
    )
}