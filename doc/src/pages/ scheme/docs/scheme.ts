export default `export default {
    valid: null,
    viewMode: false,
    formValue: {
        booleanInput: false,
        stringInput: "",
        arrayInput: {
            value: [
                {
                    id: "1",
                    value: "1",
                },
                {
                    id: "2",
                    value: "2"
                }
            ]
        },
        objectInput: {
            title: "My object"
        },
        numberInput: 0
    },
    // for optional inputs of form
    visibilities: {
        stringInput: ({formValue} : any) => {
            return {
                isVisible: formValue.booleanInput,
            }
        },
    },
    rules: {
        stringInput: [
            {
                name: "empty",
                message: "is required"
            }
        ],
        numberInput: [
            {
                name: "empty",
                message: "is required"
            },
            {
                name: "min",
                params: {
                    min: 10
                },
                message: "should be more than 10"
            }
        ],
        objectInput: [
            {
                name: "func",
                params: {
                    func: (value: any) => {
                        // is valid if object have title "My object"
                        return value.title === "My object"
                    }
                },
                message: "should be more than 10"
            }
        ],
        arrayInput: [
            {
                name: "func",
                params: {
                    func: (arrayItems: {value: array<any>}) => {
                        return arrayItems.value.length > 10
                    }
                },
                message: "should be more than 10"
            }
        ]
    }
}`