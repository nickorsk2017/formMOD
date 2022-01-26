export default `export default {
    valid: null,
    formValue: {
        first_name: "",
        last_name: "",
    },
    rules: {
        first_name: [
            {
                name: "empty",
                message: "first name is required"
            },
        ],
        last_name: [
            {
                name: "empty",
                message: "last name is required"
            },
        ]
    }
}`;