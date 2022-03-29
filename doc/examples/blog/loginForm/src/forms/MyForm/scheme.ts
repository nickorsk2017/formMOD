export default {
    valid: null,
    formValue: {
        email: "",
        password: "",
    },
    rules: {
        email: [
            {
                name: "empty",
                message: "email is empty"
            },
            {
                name: "email",
                message: "wrong format of email"
            }
        ],
        password: [
            {
                name: "empty",
                message: "password is empty"
            },
            {
                name: "min",
                message: "length should be 5 or more",
                params: {
                    min: 5,
                }
            },
            {
                name: "func",
                params: {
                    func: (value: string) => {
                        return /[a-zA-Z]/.test(value)
                    }
                },
                message: "password should have aleast one letter"
            }
        ],
    }
}