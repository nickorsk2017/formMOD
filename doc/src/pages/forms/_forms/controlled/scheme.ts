export default {
    valid: null,
    viewMode: false,
    formValue: {
        first_name: "Name",
        last_name: "2",
        address: "",
        havePets: false,
        haveHobbies: false,
        petName: "",
        hobbies: [
            {
                id: "1",
                value: "fishing",
            },
            {
                id: "2",
                value: "football"
            }
        ]
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
                message: "length should be more than 5"
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