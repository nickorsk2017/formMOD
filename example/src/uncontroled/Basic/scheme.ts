export default {
    valid: null,
    formValue: {
        first_name: "Name",
        last_name: "2",
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