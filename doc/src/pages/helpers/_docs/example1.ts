export default (() => {
const code = `import {cloneDeep, isEqual} from "formmod";

const myData = {...};

//clone safety data.
const cloneMyData = cloneDeep(myData);

// check *if* two object equal
const isEqual: boolean = isEqual(myObj1, myObj2);
`;

return code;
})()