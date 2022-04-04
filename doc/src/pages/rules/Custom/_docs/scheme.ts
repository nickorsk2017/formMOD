export default `
{
    name: "func",
    params: {
        func: (value) => {
            return value.length > 5
        }
    },
    message: "length should be greater than 5"
}`;