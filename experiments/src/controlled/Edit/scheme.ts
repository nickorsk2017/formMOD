export default {
    valid: null,
    viewMode: false,
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
            ["empty", "first name is required"]
        ],
        last_name: [
            ["empty", "last name is required"]
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
        petName: [
            ["empty", "please write about your pets"] 
        ],
        hobbies: [
            ["empty", "please write about your hobby"]
        ]
    }
}