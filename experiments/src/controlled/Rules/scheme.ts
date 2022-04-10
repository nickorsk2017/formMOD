export default {
    valid: null,
    viewMode: false,
    formValue: {
        empty: "",
        max: "",
        min: "",
        maxNum: 0,
        minNum: 0,
        email: "",
    },
    rules: {
        empty: [
            ["empty", "is empty"]
        ],
        max: [
            ["max", "length should be 5 or less", { max: 5 }]
        ],
        min: [
            ["min", "length should be 5 or greater", { min: 5 }]
        ],
        maxNum: [
            ["max", "number should be 5 or less", { max: 5, isNumber: true, }]
        ],
        minNum: [
            ["min", "number should be 5 or greater", { min: 5,  isNumber: true, }]
        ],
        email: [
            ["email", "is not email"]
        ],
    }
}