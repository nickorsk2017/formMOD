export default `
//...
// Example basic input component JSX
const onChange = (value: string) => setValue("address", value);

<TextInput
    label={"Address"}
    value={getValue("address")}
    error={getError("address")}
    viewMode={isViewMode()}
    onChange={onChange}
/>`