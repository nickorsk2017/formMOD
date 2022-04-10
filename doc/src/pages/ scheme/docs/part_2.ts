export default `
<ul content-ul>
    <li>
        <b>valid</b> - initial validation of form. </br> Set null value as default, it mean that a form dont toched(not validated) on initialisation.
    </li>
    <li>
        <b>formValue</b> - section for a values of inputs form.
    </li>
    <li>
        <b>visibilities</b> - section for an optional inputs.
    </li>
    <li>
        <b>rules</b> - section for a rules of inputs.</br>
        This rules works from top to bottom. The rule return a first error from list of rules to input.
    </li>
</ul>
`