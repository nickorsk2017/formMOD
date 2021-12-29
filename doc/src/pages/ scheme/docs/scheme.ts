export default `export default {
    valid: null,
    viewMode: false,
    formValue: {
        inputBolean: false,
        inputWithEmptyInitValue: "",
        inputWithInitValue: "init string value",
        inputWithArrayValues: [
            {
                id: "1",
                value: "1",
            },
            {
                id: "2",
                value: "2"
            }
        ],
        inputWithObjectValue: {
            title: "My object"
        },
        inputNumber: 10
    },
    visibilities: {
        inputWithEmptyInitValue: ({formValue} : any) => {
            return {
                isVisible: formValue.inputBolean,
            }
        },
        inputWithInitValue: ({formValue} : any) => {
            return {
                isVisible: formValue.inputWithArrayValues.length > 0,
            }
        },
    },
    rules: {
        inputWithEmptyInitValue: [
            {
                name: "empty",
                message: "is required"
            }
        ],
        inputWithInitValue: [
            {
                name: "empty",
                message: "is required"
            }
        ],
        inputNumber: [
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
        inputWithObjectValue: inputWithArrayValues: [
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
        inputWithArrayValues: [
            {
                name: "func",
                params: {
                    func: (value: array<any>) => {
                        return value.length > 10
                    }
                },
                message: "should be more than 10"
            }
        ]
    }
}`