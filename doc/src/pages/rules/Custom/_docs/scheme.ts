export default `
{
    name: "custom",
    params: {
        rule: (value: string) => {
            return /[a-zA-Z]/.test(value)
        }
    },
    message: "password should have at least one letter"
}`;