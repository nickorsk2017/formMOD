export default {
    valid: null,
    formValue: {
        files: [],
    },
    rules: {
        files: [
            {
                name: "func",
                params: {
                    func: (files: Array<any>) => {
                        return files.length > 0
                    }
                },
                message: "Files is empty"
            }
        ],
    }
}