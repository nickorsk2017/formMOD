export default `

export default () =>  {
   ...
    rules: {
        // first input
        full_name: [
            // first rule
            {
                name: "empty",
                message: "Please write your full name"
            },
            // next rule
            {
                name: "custom",
                params: {
                    rule: (value: string) => {
                        return value.length > 5
                    }
                },
                message: "length should be greater than 5"
            },
            ...
        ],
        // second input
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