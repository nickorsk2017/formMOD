
export class email {
  static validate = (value: string) => {
    let valid = false;
    const test = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const match = value.match(test);
    if(match || value == null || value == "") {
      valid = true;
    }
    return valid
  }
}
