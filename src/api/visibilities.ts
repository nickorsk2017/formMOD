import * as _ from 'lodash';
import {
    FormState,
    ControlName
} from "../types";

export type VisibilitiesParams = {
    getFormState: () => FormState,
};
/*export type getVisibilitiesResultParams = {
  getFormState: () => FormState,
}*/
export type VisibilityResult = {disable: boolean, isVisible: boolean};

export type GetVisibilitiesResult = () => {
    [key: string]: VisibilityResult
};

export type GetVisibilityControl = (controlName: ControlName) => VisibilityResult;

export type Visibilities = (params: VisibilitiesParams) => {
    getVisibilityControl: GetVisibilityControl,
    getVisibilitiesResult: GetVisibilitiesResult
};


export const getVisibilities : Visibilities = ({getFormState}) => {
    const getVisibilityControl: GetVisibilityControl = (controlName) => {
        const visibilities = getFormState().visibilities;
        if(visibilities && visibilities[controlName] && typeof visibilities[controlName] === "function"){
            const formValue = getFormState().formValue;
            const result = visibilities[controlName]({formValue});
            if(typeof result === "object" && (result.hasOwnProperty("disable") || result.hasOwnProperty("isVisible"))){      
                return {
                    disable: result.hasOwnProperty("disable") ? result.disable : false,
                    isVisible: result.hasOwnProperty("isVisible") ? result.isVisible : true
                };
            }
        }
        return {
            disable: false, 
            isVisible: true
        };
    }
    const getVisibilitiesResult: GetVisibilitiesResult = () => {
        const visibilities = getFormState().visibilities || {};
        let result = {};
        for(let key in visibilities){
            result[key] = getVisibilityControl(key);
        }
        return result;
    };

    return {
        getVisibilityControl,
        getVisibilitiesResult
    }
}