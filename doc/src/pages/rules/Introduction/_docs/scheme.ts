export default `

export default (initFormValue: {} || object) =>  {
   ...
    rules: {
        // first control
        full_name: [
            // first rule
            {
                name: "empty",
                message: "Please write your full name"
            },
            // next rule
            {
                name: "func",
                params: {
                    func: (value: string) => {
                        return value.length > 5
                    }
                },
                message: "length should be more than 5"
            },
            ...
        ],
        // second control
        pet_name: [
            // first rule
            {
                name: "empty",
                message: "Please write name of your favorite pet "
            },
            ...
        ]
    },
    ...
}
`;