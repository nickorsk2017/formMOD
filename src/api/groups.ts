import * as _ from 'lodash';
import {
  FormState,
  InputName,
  GroupInputId,
  InputGroupValues,
  InputGroupValue
} from '../types';
import { UpdateFormState } from './useStateForm';

export type GetGroup = (params: {
  formState: FormState;
  inputName: InputName;
}) => InputGroupValues | undefined;
export type DeleteItem = (params: {
  formState: FormState;
  inputName: InputName;
  groupInputId: GroupInputId;
}) => boolean;
export type AddItem = (params: {
  formState: FormState;
  inputName: InputName;
  inputGroupValue: InputGroupValue;
}) => InputGroupValues | false;
export type GetItemById = (params: {
  formState: FormState;
  inputName: InputName;
  groupInputId: GroupInputId;
}) => InputGroupValue | undefined;
export type GetItemByIndex = (params: {
  formState: FormState;
  inputName: InputName;
  index: number;
}) => InputGroupValue | undefined;

export type Groups = (
  params: GroupsParams
) => {
  addItem: AddItem;
  deleteItem: DeleteItem;
  getGroup: GetGroup;
  getItemById: GetItemById;
  getItemByIndex: GetItemByIndex;
};

export type GroupsParams = {
  updateFormState: UpdateFormState;
};

export const groups: Groups = ({ updateFormState }) => {
  const getItemByIndex: GetItemByIndex = ({ formState, inputName, index }) => {
    console.log(index, typeof index, 'index');
    if (typeof index === 'number' && index >= 0) {
      const group = getGroup({ formState, inputName });
      return group ? group[index] : undefined;
    }
    return undefined;
  };

  const getItemById: GetItemById = ({ formState, inputName, groupInputId }) => {
    const group = getGroup({ formState, inputName });
    if (group) {
      return group.find((v: InputGroupValue) => {
        return v.id === groupInputId;
      });
    }
    return undefined;
  };

  const getGroup: GetGroup = ({ formState, inputName }) => {
    if (inputName) {
      const group = formState.formValue[inputName];
      if (Array.isArray(group)) {
        return group;
      }
    }
    return undefined;
  };

  const deleteItem: DeleteItem = ({ formState, inputName, groupInputId }) => {
    const _formState: FormState = _.cloneDeep(formState);
    const group = getGroup({ formState, inputName });
    if (group) {
      _formState.formValue[inputName] = group.filter((v: InputGroupValue) => {
        return v.id !== groupInputId;
      });
      updateFormState(_formState);
      return true;
    }
    return false;
  };

  const convertIdToString = (
    inputGroupValue: InputGroupValue
  ): InputGroupValue => {
    let _inputGroupValue = inputGroupValue;
    if (typeof _inputGroupValue.id === 'number') {
      _inputGroupValue = _.cloneDeep(inputGroupValue);
      _inputGroupValue.id = _inputGroupValue.id.toString();
    }
    return _inputGroupValue;
  };

  const addItem: AddItem = ({ formState, inputName, inputGroupValue }) => {
    const _formState: FormState = _.cloneDeep(formState);
    const group = getGroup({ formState, inputName });
    if (group) {
      (_formState.formValue[inputName] as InputGroupValues).push(
        convertIdToString(inputGroupValue)
      );
      updateFormState(_formState);
      return _formState.formValue[inputName] as InputGroupValues;
    }
    return false;
  };

  return {
    deleteItem,
    addItem,
    getGroup,
    getItemById,
    getItemByIndex
  };
};
