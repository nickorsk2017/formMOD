export default (() => {
const code = `import {cloneDeep} from "formmod";

const convertDataToFormValue = (studentData: StudentData) => {
  return {
    firstName: studentData.user.firstName,
    lastName: studentData.user.lastName,
  }
}

const convertDataFromFormValue = (formValue) => {
  let data = cloneDeep(StudentDataFromAPI);
  data.user.firstName = formValue.firstName;
  data.user.lastName = formValue.lastName;
  data.updated = new Date().toUTCString();
}
`;

return code;
})()