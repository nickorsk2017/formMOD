export default `export default {
    valid: null,
    formValue: {
        email: "",
        password: "",
    },
    rules: {
        email: [
            ["epmty", "email is empty"],
            ["email", "wrong format of email"]
        ],
        password: [
            ["epmty", "password is empty"],
            ["min", "length should be 5 or greater", {min: 5}],
            ["custom", "password should have at least one letter", {
                rule: (value: string) => {
                    return /[a-zA-Z]/.test(value)
                }
            }],
        ],
    }
}`;