export default `
useEffect(() => {
    if(initValue){
        // edit mode
        setValues(initValue);
    } else {
        // create mode
        resetForm()
    }
}, [initValue]);
`