export default {
    valid: null,
    viewMode: false,
    formValue: {
        first_name: "",
        last_name: "",
        address: "",
        haveFavorite: false,
        haveHobbies: false,
        petName: "",
        hobbies: []
    },
    visibilities: {
        petName: ({formValue} : any) => {
            return {
                isVisible: formValue.haveFavorite,
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
                message: "length should be greater than 5"
            }
        ],
        haveFavorite: [
            {
                name: "empty",
                message: ""
            },
        ],
        petName: [
            {
                name: "empty",
                message: "please write about your pets"
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