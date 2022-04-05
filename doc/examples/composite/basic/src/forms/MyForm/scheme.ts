import { ItemType } from "../../ui";

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
                    func: (item: ItemType | null) => {
                        return item?.value !== undefined
                    }
                },
                message: "Please, select a student"
            }
        ]
    }
}