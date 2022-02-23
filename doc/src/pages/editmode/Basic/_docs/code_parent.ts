export default (() => {
const code = `import React from 'react';
import { MyForm } from './MyForm';
    
export type ValueForm = {
    first_name: string,
    last_name: string,
}
    
export function Edit() {
    // init value of form.
    const formValue: ValueForm = {
        first_name: "Jack",
        last_name: "Pack",
     };
        
    return <MyForm initValue={formValue}/>
}`;

    return code;
})()