export default {
    valid: null,
    viewMode: false,
    onFly: true,
    formValue: {
        first_name: "",
        last_name: "",
        address: "",
        havePets: false,
        haveHobbies: false,
        petName: "",
        hobbies: []
    },
    visibilities: {
        petName: ({formValue} : any) => {
            return {
                isVisible: formValue.havePets,
            }
        },
        hobbies: ({formValue} : any) => {
            return {
                isVisible: formValue.haveHobbies,
            }
        },
    },
    rules: {
        first_name: [
            {
                name: "empty",
                message: "first name is required"
            },
           ["max", "length should be 5 or less", { max: 5 }]
        ],
        last_name: [
            {
                name: "empty",
                message: "last name is required"
            }
        ],
        address: [
            {
                name: "custom",
                params: {
                    rule: (value: string) => {
                        return value.length > 5
                    }
                },
                message: "length should be greater than 5"
            }
        ],
        havePets: [
            {
                name: "empty",
                message: ""
            },
        ],
        petName: [
            {
                name: "empty",
                message: "please write about your favourite pet"
            },
        ],
        hobbies: [
            {
                name: "empty",
                message: "please write about your hobby"
            },
        ]
    }
}