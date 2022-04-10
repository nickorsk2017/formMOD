const PREFIX = process.env.prefixMOD || "/";

export default `
<h2 class="content-header-important">Inputs with array value</h1>
<div class="content-header-important-content">
    Array is reserved for <a href="/#${PREFIX}group/">group input components</a>.
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