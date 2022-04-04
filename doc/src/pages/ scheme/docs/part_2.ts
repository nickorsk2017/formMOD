export default `
<ul content-ul>
    <li>
        <b>1. valid</b> - initial validation of form. </br> Set null value as default, it mean that a form dont toched(not validated) on initialisation.
    </li>
    <li>
        <b>2. viewMode</b> - a view mode for detail page.
    </li>
    <li>
        <b>3. formValue</b> - section for a values of inputs form.
    </li>
    <li>
        <b>4. visibilities</b> - section for an optional inputs.
    </li>
    <li>
        <b>5. rules</b> - section for a rules of inputs.</br>
        This rules works from top to bottom. The rule return a first error from list of rules to input.
    </li>
</ul>
`