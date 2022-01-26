import React from 'react';
import { MyForm } from './MyForm'

export function Edit() {
    // this is value for edit mode.
    const formvalue = {
        first_name: "Jack",
        last_name: "Pack",
        haveHobbies: true,
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
    return <MyForm formValue={formvalue}/>
}