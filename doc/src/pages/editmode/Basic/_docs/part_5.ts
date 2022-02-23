export default `
// fill form data (filled before first render)
if(initValue){
    setValues(initValue, {init: true});
}

// after update initValue *from* store or property component
// you can update a form value in useEffect hook
useEffect(() => {
    if(initValue){
        setValues(initValue, {skipUpdate: true});
    } else {
        resetForm()
    }
}, [initValue]);
`