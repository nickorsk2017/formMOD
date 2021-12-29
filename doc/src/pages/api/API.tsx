import React from 'react'
import {Content} from "../../ui";
import {PART_1, PART_2} from "./docs";
import styles from './API.module.css';

export type APIParams = {};

const CONTENT = [
  {
    method: "<b>formState</b>",
    desc: "Current state of form. Avoid change it without API formMod.",
    type: "Property of form"
  },
  {
    method: "<b>setViewMode</b>: (viewMode: boolean) => boolean",
    desc: "Set view mode in a form.",
    type: "Inside form"
  },
  {
    method: "<b>isViewMode</b>: () => boolean",
    desc: "Check a form in view mode.",
    type: "Inside form"
  },
  {
    method: "<b>getItemByIndex</b>: ({ inputName: string, index: number }) => InputGroupValue | undefined",
    desc: "Return item of group by index",
    type: "Inside form"
  },
  {
    method: "<b>deleteGroupItem</b>: ({ inputName: string, groupInputId: GroupInputId}) => boolean",
    desc: "Delete item of group",
    type: "Inside form"
  },
  {
    method: `<b>addGroupItem</b>: ({
      inputName: string,
      value: InputGroupValue
    }) => false | InputGroupValues`,
    desc: "Add item to group",
    type: "Inside form"
  },
  {
    method: "<b>getGroup</b>: (inputName: string) => InputGroupValues",
    desc: "Get a group",
    type: "Inside form"
  },
  {
    method: "<b>setValue</b>: (inputName: InputName, inputValue: InputValue, skipUpdate?: boolean | undefined, inputId?: GroupInputId | undefined) => false | FormState",
    desc: "Set value of input or item of group inputs. <br/> - If property <b>skipUpdate</b> is true, the rendering will be canceled. <br/> - If using property <b>inputId</b> will set value for a item of group input.<br/> Return a form state or false.",
    type: "Inside form"
  },
  {
    method: "<b>setValues</b>: (inputsValues: FormValue) => false | FormState",
    desc: "Set value for a multiple inputs.",
    type: "Inside form"
  },
  {
    method: "<b>validate</b>: (updateValidation: boolean, callback: {valid: boolean, formValue: any}) => FormState",
    desc: "Validate a form. Return new state of form",
    type: "Inside form"
  },
  {
    method: "<b>getError</b>: (inputName: InputName, inputId?: GroupInputId | undefined) => string | null",
    desc: "Get error of input or item of group. Return a message of error or null if value is valid.",
    type: "Inside form"
  },
  {
    method: "<b>resetForm</b>: () => FormState",
    desc: "Reset a form state to init value.",
    type: "Inside form"
  },
  {
    method: "<b>useRefMod</b>: (inputName: InputName) => useRefModResult",
    desc: "Create reference of input.<br/> Using only for making uncontrolled inputs.<br/> Return a link to API of input.",
    type: "Inside form"
  },
  {
    method: "<b>isVisible</b>: (inputName: InputName) => boolean",
    desc: "Check if a input is visible. Using for a optional inputs.",
    type: "Inside form"
  },
];


const CONTENT_UNCONTROLLED = [
  {
    method: "<b>useRefModResult</b>",
    desc: "The link of uncontrolled input with API.",
    type: "Property. Inside form"
  },
  {
    method: "<b>useRefModResult.ref</b>",
    desc: "Reference for JSX intput element.",
    type: "Inside uncontrolled input (UI component)."
  },
  {
    method: "<b>useRefModResult.isViewMode</b>: () => boolean",
    desc: "Check if a form in view mode. Render a JSX for detail page.",
    type: "Inside uncontrolled input (UI component)."
  },
  {
    method: `<b>useRefModResult.getError</b>: (params?: {
      inputId?: GroupInputId | undefined;
  } | undefined) => string | null`,
    desc: "Get error of input or item of group input.",
    type: "Inside uncontrolled input (UI component)."
  },
  {
    method: `<b>useRefModResult.getValue</b>: (params?: {
      inputId?: GroupInputId | undefined;
  } | undefined) => InputValue`,
    desc: "Get value of input or item of group input.",
    type: "Inside uncontrolled input (UI component)."
  },
  {
    method: `<b>useRefModResult.isVisible</b>: (params?: {
      inputId?: GroupInputId | undefined;
  } | undefined) => boolean`,
    desc: "Check if optional input or item of group is visible. Using for optional inputs.",
    type: "Inside uncontrolled input (UI component)."
  },
]

export const API = () => {

    const render = () => {
      return CONTENT.map((content, index) => {
        return (<tr key={index}>
          <td dangerouslySetInnerHTML={{__html: content.method}}></td>
          <td dangerouslySetInnerHTML={{__html: content.desc}}></td>
          <td>{content.type}</td>
        </tr>)
      });
    };

    const renderUncontrolled = () => {
      return CONTENT_UNCONTROLLED.map((content, index) => {
        return (<tr key={index}>
          <td dangerouslySetInnerHTML={{__html: content.method}}></td>
          <td dangerouslySetInnerHTML={{__html: content.desc}}></td>
          <td>{content.type}</td>
        </tr>)
      });
    };

    return (
      <div className={styles.container}>
        <Content content={PART_1}/>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Method</td>
              <td>Description</td>
              <td>Type input</td>
            </tr>
          </thead>
          <tbody>
            {render()}
            <tr className={styles.tdHead}>
              <td colSpan={3}>API of uncontrolled input</td>
            </tr>
            {renderUncontrolled()}
          </tbody>
        </table>
        <Content content={PART_2}/>
      </div>
    )
}
  