export default `
    Steps for making a form (see comments in code): <br/><br/>
    STEP 1: Create scheme for form <b>(see the example below)</b>.<br/>
    STEP 2: Create model of form. Use the useFormMod React hook where set a scheme in first attribute <b>(line 8-10)</b>.<br/>
    STEP 3: Connect system to inputs.
    The method useRefMod('CONTROL_ID') generate a <b>link object</b> with all methods.<br/>
    Inside a input component you will use this link <b>(line 44, 48)</b>.
`