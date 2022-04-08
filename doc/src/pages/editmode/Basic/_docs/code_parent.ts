export default (() => {
const code = `%collapse%import React from 'react';
import { MyForm } from './MyForm';
    
export type ValueForm = {
    first_name: string,
    last_name: string,
}%collapse%
    
export const Edit = () => {
   
    const formValue: ValueForm = {
        first_name: "Jack",
        last_name: "Pack",
     };
        
    return <MyForm initValue={formValue}/>
}`;

    return code;
})()