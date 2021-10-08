export default `export default {
    valid: null,
    formValue: {
        full_name: "",
        petName: "",
        havePets: false,
    },
    rules: {
        full_name: [
            {
                name: "empty",
                message: "Please write your full name"
            }
        ],
        petName: [
            {
                name: "empty",
                message: "Please write name of your favorite pet "
            },
        ],
        havePets: [
            {
                name: "empty",
                message: ""
            },
        ],
    },
    visibilities: {
        petName: ({formValue} : any) => {
            return {
                isVisible: formValue.havePets,
            }
        },
    },
}
`;