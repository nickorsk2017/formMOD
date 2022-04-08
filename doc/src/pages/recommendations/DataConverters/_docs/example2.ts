export default (() => {
const code = `

// some helpers 
import {cloneDeep} from "formmod";

export const convertDataToFormValue = (studentData) => {
  return {
    firstName: studentData.user.firstName,
    lastName: studentData.user.lastName,
  }
};

export const convertDataFromFormValue = (studentData, formValue) => {
  let data = cloneDeep(studentData);
  data.user.firstName = formValue.firstName;
  data.user.lastName = formValue.lastName;
  return data;
};`;

return code;
})()