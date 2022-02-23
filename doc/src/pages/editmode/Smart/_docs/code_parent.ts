export default (() => {
    const code = `import React from 'react';
    import { Form } from './Form'
    
    export function Edit() {
        // value for edit.
        const formValue = {
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
        
        return <Form initValue={formValue}/>
    }`;

    return code;
})()