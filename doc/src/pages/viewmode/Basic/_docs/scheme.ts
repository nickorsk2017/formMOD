export default `export default {
    valid: null,
    formValue: {
        first_name: "",
        last_name: "",
    },
    rules: {
        first_name: [
            ["empty", "first name is required"]
        ],
        last_name: [
            ["empty", "last name is required"]
        ],
    }
}`;