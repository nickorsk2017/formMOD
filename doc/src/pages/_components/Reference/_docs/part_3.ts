export default `
    Sections of scheme:<br/><br/>
    1. <b>valid</b> - boolean or null. Set null variable as default, it mean that a form dont toched(not validated) on init.<br/>
    2. <b>formValue</b> - list of controlls and values of them. The key of list is ID of control.</br> Set init values from <b>initFormValue</b> property.
    <br/>Set form value as {} if form in create mode.<br/>
    3. <b>rules</b> - list of rules. Validators works from top to bottom. The form return first error from array.<br/>
    4. <b>other sections.</b> - visibilities and other sections. Please see in next articles of documentation.<br/>
`