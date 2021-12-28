export default {
    valid: null,
    viewMode: false,
    formValue: {
        first_name: "",
        last_name: "",
        haveHobbies: false,
        hobbies: []
    },
    visibilities: {
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
        hobbies: [
            {
                name: "empty",
                message: "please write about your hobby"
            },
        ]
    }
}