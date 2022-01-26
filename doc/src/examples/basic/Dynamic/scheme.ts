export default {
    valid: null,
    formValue: {
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
    rules: {
        hobbies: [
            {
                name: "empty",
                message: "please write about your hobby"
            },
        ]
    }
}