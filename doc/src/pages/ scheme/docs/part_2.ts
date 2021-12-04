export default `
<ul content-ul>
    <li>
        <b>1. valid</b> - initial validation of form. </br> Set null value as default, it mean that a form dont toched(not validated) on init.
    </li>
    <li>
        <b>2. viewMode</b> - a view mode for detail page.
    </li>
    <li>
        <b>3. formValue</b> - section for a values of controls form.
    </li>
    <li>
        <b>4. visibilities</b> - section for an optional controls.
    </li>
    <li>
        <b>5. rules</b> - section for a rules of validators.</br>
        This a validators works from top to bottom. The rule return a first error from list of validator to control.
    </li>
</ul>
`