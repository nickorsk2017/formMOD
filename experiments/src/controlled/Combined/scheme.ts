import { Item } from "../ui/SearchSelect/SearchSelect";

export default {
    valid: null,
    formValue: {
        student: null,
    },
    rules: {
        student: [
            {
                name: "custom",
                params: {
                    rule: (item: Item | null) => {
                        return item?.value !== undefined
                    }
                },
                message: "Please, select a student"
            }
        ]
    }
}