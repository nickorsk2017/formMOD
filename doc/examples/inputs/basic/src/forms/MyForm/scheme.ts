export default {
    valid: null,
    formValue: {
        first_name: "",
        last_name: "",
    },
    rules: {
        first_name: [
            ["empty", "please write your first name"]
        ],
        last_name: [
            ["empty", "please write your last name"]
        ]
    }
}