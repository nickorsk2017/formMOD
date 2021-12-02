export default `export default {
    valid: null,
    viewMode: false,
    formValue: {
        controlBolean: false,
        controlWithEmptyInitValue: "",
        controlWithInitValue: "init string value",
        controlWithArrayValues: [
            {
                id: "1",
                value: "1",
            },
            {
                id: "2",
                value: "2"
            }
        ],
        controlWithObjectValue: {
            title: "My object"
        },
        controlNumber: 10
    },
    visibilities: {
        controlWithEmptyInitValue: ({formValue} : any) => {
            return {
                isVisible: formValue.controlBolean,
            }
        },
        controlWithInitValue: ({formValue} : any) => {
            return {
                isVisible: formValue.controlWithArrayValues.length > 0,
            }
        },
    },
    rules: {
        controlWithEmptyInitValue: [
            {
                name: "empty",
                message: "is required"
            }
        ],
        controlWithInitValue: [
            {
                name: "empty",
                message: "is required"
            }
        ],
        controlNumber: [
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
        controlWithObjectValue: controlWithArrayValues: [
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
        controlWithArrayValues: [
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