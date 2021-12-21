export default (() => {
    const code = `import React from 'react'
    import {useFormMod, useCountRender} from "formmod";
    import {TextInput, Button} from "../../../../examples/controled/ui";
    import FORM_SCHEME from "./scheme";
    import styles from './Form.module.css';
    
    export function Form() {
        const {
            setValue,
            getValue,
            getError,
            validate,
            resetForm,
            isViewMode,
            setViewMode
        } = useFormMod(
            FORM_SCHEME
        );
        
        const handleSubmit = function(event: any){
            if(event && event.preventDefault) {
                event.preventDefault();
            }
            validate(true, (valid: boolean, formValue: any) => {
                if(valid) {
                    console.log("FORM IS VALID, value:", formValue );
                    setViewMode(true);
                } else {
                    console.log('FORM IS WRONG, value:', formValue );
                }
            });
        }
    
        const edit = () => {
            setViewMode(false);
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
            
        return (
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.count}>Count render: {getCountRender()}</div>
                <TextInput
                    label={"First name"}
                    value={getValue("first_name")}
                    error={getError("first_name")}
                    onChange={(value: string) => setValue("first_name", value)}
                    viewMode={isViewMode()}
                />
                 <TextInput
                    label={"Last name"}
                    value={getValue("last_name")}
                    error={getError("last_name")}
                    onChange={(value: string) => setValue("last_name", value)}
                    viewMode={isViewMode()}
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
    }`;

    return code;
})()