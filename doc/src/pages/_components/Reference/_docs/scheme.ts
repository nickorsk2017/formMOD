export default `
// FORM_SCHEME.json

export default (initFormValue: {} || object) =>  {
    valid: null,
    formValue: {
        full_name: initFormValue.full_name || "",
        pet_name: initFormValue.petName || ""
    },
    rules: {
        full_name: [
            // first validator
            {
                name: "empty",
                message: "Please write your full name"
            },
            // next validator
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
        pet_name: [
            {
                name: "empty",
                message: "Please write name of your favorite pet "
            },
        ]
    }
}
`;