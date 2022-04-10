export default {
    valid: null,
    formValue: {
        full_name: "",
        favoritePetName: "",
        haveFavorite: false,
    },
    rules: {
        full_name: [
            ["empty", "please write your full name"]
        ],
        favoritePetName: [
            ["empty", "please write name of your favorite pet"]
        ],
    },
    visibilities: {
        favoritePetName: ({formValue} : any) => {
            return {
                isVisible: formValue.haveFavorite,
            }
        },
    },
}