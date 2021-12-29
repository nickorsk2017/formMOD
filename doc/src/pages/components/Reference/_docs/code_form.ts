export default (() => {
    const code = `
    //The code of form
    import React from 'react'
    import {useFormMod} from "formmod";
    // STEP 1: import form scheme
    import FORM_SCHEME from "./scheme";
    // Some code ...
    
    export function MyForm(props: any) {
        // STEP 2: use form system
        const {validate, resetForm, useRefMod} = useFormMod(
            FORM_SCHEME(props.value || {})
        );

        // Some code ...

        // STEP 3: connect inputs to components.
        return (
            <form onSubmit={handleSubmit} className={styles.form}>
                ...
                <TextInput
                    label={"Your full name"}
                    refMod={useRefMod("full_name")}
                />
                {<TextInput
                    label={"Favorite pet"}
                    refMod={useRefMod("pet_name")}
                />}
                ...
            </form>
        )
    }`;

    return code;
})()