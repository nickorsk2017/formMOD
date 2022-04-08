export default (() => {
const code = `// parent component
import {convertDataToFormValue, convertDataFromFormValue} from "./students/helpers";

const Parent = ({studentData}) => {
  const initValue = convertDataToFormValue(studentData);

  const submitHandler = (formValue) => {
    const newStudentData = convertDataFromFormValue(studentData, formValue);
  };

  return <MyForm onSubmit={submitHandler} initValue={initValue}/>
}`;

return code;
})()