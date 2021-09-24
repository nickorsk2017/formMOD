import * as _ from 'lodash';
import { FormState, ControlName, GroupControlId, ControlGroupValues, ControlGroupValue } from '../types';
import { UpdateFormState } from './useStateForm';

export type GetGroup = (params: {formState: FormState, controlName: ControlName}) => ControlGroupValues | undefined;
export type DeleteItem = (params: {formState: FormState, controlName: ControlName, groupControlId: GroupControlId}) => boolean;
export type AddItem = (params: {formState: FormState, controlName: ControlName, controlGroupValue: ControlGroupValue}) => ControlGroupValues | false;
export type GetItemById = (params: {formState: FormState, controlName: ControlName, groupControlId: GroupControlId}) => ControlGroupValue | undefined;
export type GetItemByIndex = (params: {formState: FormState, controlName: ControlName, index: number}) => ControlGroupValue | undefined;


export type Groups = (params: GroupsParams) => {
    addItem: AddItem;
    deleteItem: DeleteItem;
    getGroup: GetGroup;
    getItemById: GetItemById;
    getItemByIndex: GetItemByIndex;
};

export type GroupsParams = {
    updateFormState: UpdateFormState;
};

export const groups: Groups = ({updateFormState}) => {

    const getItemByIndex: GetItemByIndex = ({formState, controlName, index}) => {
        console.log(index, typeof index, 'index')
        if(typeof index === "number" && index >= 0){
            const group = getGroup({formState, controlName});
            return group ? group[index] : undefined;
        }
        return undefined;
    };

    const getItemById: GetItemById = ({formState, controlName, groupControlId}) => {
        const group = getGroup({formState, controlName});
        if(group){
            return group.find((v: ControlGroupValue) => {
                return v.id === groupControlId;
            });
        }
        return undefined;
    };

    const getGroup: GetGroup = ({formState, controlName}) => {
        if(controlName){
            const group = formState.formValue[controlName];
            if(Array.isArray(group)){
                return group;
            }
        }
        return undefined;
    };

    const deleteItem: DeleteItem = ({formState, controlName, groupControlId}) => {
        const _formState: FormState = _.cloneDeep(formState);
        const group = getGroup({formState, controlName});
        if(group){
            _formState.formValue[controlName] = group.filter((v: ControlGroupValue) => {
                return v.id !== groupControlId;
            });
            updateFormState(_formState);
            return true;
        }
        return false;
    };

    const convertIdToString = (controlGroupValue: ControlGroupValue): ControlGroupValue => {
        let _controlGroupValue = controlGroupValue;
        if(typeof _controlGroupValue.id === "number"){
            _controlGroupValue = _.cloneDeep(controlGroupValue);
            _controlGroupValue.id = _controlGroupValue.id.toString();
        }
        return _controlGroupValue;
    };

    const addItem: AddItem = ({formState, controlName, controlGroupValue}) => {
        const _formState: FormState = _.cloneDeep(formState);
        const group = getGroup({formState, controlName});
        if(group){
            (_formState.formValue[controlName] as ControlGroupValues).push(convertIdToString(controlGroupValue));
            updateFormState(_formState);
            return (_formState.formValue[controlName] as ControlGroupValues);
        }
        return false
    };

    return {
        deleteItem,
        addItem,
        getGroup,
        getItemById,
        getItemByIndex,
      };
};
