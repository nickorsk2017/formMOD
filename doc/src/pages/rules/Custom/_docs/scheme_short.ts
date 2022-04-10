export default `
["custom", "password should have at least one letter", {
    rule: (value: string) => {
        return /[a-zA-Z]/.test(value)
    }
}]
`;