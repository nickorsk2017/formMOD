export default `
    Sections of scheme:<br/><br/>
    1. <b>valid</b> - boolean or null. Set null variable as default, it mean that a form dont toched(not validated) on init.<br/>
    2. <b>formValue</b> - list of controlls and values of them.<br/>
    3. <b>rules</b> - list of rules. The validators works from top to bottom. The rule return a first error from list of validator to control.<br/>
`