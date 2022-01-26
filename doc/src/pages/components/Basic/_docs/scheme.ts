export default `
    export default {
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
                {
                    name: "func",
                    params: {
                        func: (value: string) => {
                            return value.length > 5
                        }
                    },
                    message: "Length should be more than 5 lenght"
                }
            ],
            last_name: [
                {
                    name: "empty",
                    message: "last name is required"
                },
            ]
        }
    }
`;