import { Item } from "../ui/SearchSelect/SearchSelect";

export default {
    valid: null,
    formValue: {
        student: null,
    },
    rules: {
        student: [
            {
                name: "func",
                params: {
                    func: (item: Item | null) => {
                        return item?.value !== undefined
                    }
                },
                message: "Please, select a student"
            }
        ]
    }
}