

export interface IRuleResult {
    name: string,
    valid: boolean,
    message: string | null,
    params: object,
}

export class RuleResult implements IRuleResult {
    name: string =  "valid";
    valid: boolean = true;
    message: string = "";
    params: object = {};
    constructor({name, valid, message, params} : IRuleResult){
        this.name = name;
        this.valid = valid;
        this.message = message;
        this.params = params;
    }
}