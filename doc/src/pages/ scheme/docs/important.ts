export default `
<h2 class="content-header-important">Inputs with value as array</h1>
<div class="content-header-important-content">
    Array is reserved for group input components. Do not use it in your scheme.
<pre>
<code>formValue: {
    students: [
        {
            id: 1,
            name: "John"
        },
        {
            id: 1,
            name: "Leo"
        },
    ]
}</code>
</pre>

For correct work convert it to object:
<pre>
<code>formValue: {
    students: {
        value: [
            {
                id: 1,
                name: "John"
            },
            {
                id: 1,
                name: "Leo"
            },
        ]
    }
}</code>
</pre>

</div>
`