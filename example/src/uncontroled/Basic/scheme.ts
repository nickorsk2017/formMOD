export default {
    valid: null,
    formValue: {
        first_name: "Name",
        last_name: "2",
        address: "",
        havePets: false,
    },
    visibilities: {

    },
    rules: {
        first_name: [
            {
                name: "empty",
                message: "first name is required"
            }
        ],
        last_name: [
            {
                name: "empty",
                message: "last name is required"
            }
        ],
        address: [
            {
                name: "func",
                params: {
                    func: (value: string) => {
                        return value.length > 5
                    }
                },
                message: "Length should be more than 2 lenght"
            }
        ],
        havePets: [
            {
                name: "empty",
                message: "Do you have pets?"
            },
        ]
    }
}