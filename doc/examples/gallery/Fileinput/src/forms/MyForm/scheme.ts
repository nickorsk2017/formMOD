export default {
    valid: null,
    formValue: {
        files: [],
    },
    rules: {
        files: [
            {
                name: "custom",
                params: {
                    rule: (files: Array<any>) => {
                        return files.length > 0
                    }
                },
                message: "Files is empty"
            }
        ],
    }
}