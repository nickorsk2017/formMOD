export default `export default {
    valid: null,
    formValue: {
        full_name: "",
        petName: "",
        haveFavorite: false,
    },
    %collapse%rules: {
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
        haveFavorite: [
            {
                name: "empty",
                message: ""
            },
        ],
    },%collapse%
    visibilities: {
        petName: ({formValue} : any) => {
            return {
                isVisible: formValue.haveFavorite,
            }
        },
    },
}
`;