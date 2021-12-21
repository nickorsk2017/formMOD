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
    method: "<b>getItemByIndex</b>: ({ controlName: string, index: number }) => ControlGroupValue | undefined",
    desc: "Return item of group by index",
    type: "Inside form"
  },
  {
    method: "<b>deleteGroupItem</b>: ({ controlName: string, groupControlId: GroupControlId}) => boolean",
    desc: "Delete item of group",
    type: "Inside form"
  },
  {
    method: `<b>addGroupItem</b>: ({
      controlName: string,
      value: ControlGroupValue
    }) => false | ControlGroupValues`,
    desc: "Add item to group",
    type: "Inside form"
  },
  {
    method: "<b>getGroup</b>: (controlName: string) => ControlGroupValues",
    desc: "Get a group",
    type: "Inside form"
  },
  {
    method: "<b>setValue</b>: (controlName: ControlName, controlValue: ControlValue, skipUpdate?: boolean | undefined, controlId?: GroupControlId | undefined) => false | FormState",
    desc: "Set value of control or item of group control. <br/> - If property <b>skipUpdate</b> is true, the rendering will be canceled. <br/> - If using property <b>controlId</b> will set value for a item of group control.<br/> Return a form state or false.",
    type: "Inside form"
  },
  {
    method: "<b>setValues</b>: (controlsValues: FormValue) => false | FormState",
    desc: "Set value for a multiple controls.",
    type: "Inside form"
  },
  {
    method: "<b>validate</b>: (updateValidation: boolean, callback: {valid: boolean, formValue: any}) => FormState",
    desc: "Validate a form. Return new state of form",
    type: "Inside form"
  },
  {
    method: "<b>getError</b>: (controlName: ControlName, controlId?: GroupControlId | undefined) => string | null",
    desc: "Get error of control or item of group. Return a message of error or null if value is valid.",
    type: "Inside form"
  },
  {
    method: "<b>resetForm</b>: () => FormState",
    desc: "Reset a form state to init value.",
    type: "Inside form"
  },
  {
    method: "<b>useRefMod</b>: (controlName: ControlName) => useRefModResult",
    desc: "Create reference of control.<br/> Using only for making uncontrolled controls.<br/> Return a link to API of control.",
    type: "Inside form"
  },
  {
    method: "<b>isVisible</b>: (controlName: ControlName) => boolean",
    desc: "Check if a control is visible. Using for a optional controls.",
    type: "Inside form"
  },
];


const CONTENT_UNCONTROLLED = [
  {
    method: "<b>useRefModResult</b>",
    desc: "The link of uncontrolled control with API.",
    type: "Property. Inside form"
  },
  {
    method: "<b>useRefModResult.ref</b>",
    desc: "Reference for JSX intput element.",
    type: "Inside uncontrolled control (UI component)."
  },
  {
    method: "<b>useRefModResult.isViewMode</b>: () => boolean",
    desc: "Check if a form in view mode. Render a JSX for detail page.",
    type: "Inside uncontrolled control (UI component)."
  },
  {
    method: `<b>useRefModResult.getError</b>: (params?: {
      controlId?: GroupControlId | undefined;
  } | undefined) => string | null`,
    desc: "Get error of control or item of group control.",
    type: "Inside uncontrolled control (UI component)."
  },
  {
    method: `<b>useRefModResult.getValue</b>: (params?: {
      controlId?: GroupControlId | undefined;
  } | undefined) => ControlValue`,
    desc: "Get value of control or item of group control.",
    type: "Inside uncontrolled control (UI component)."
  },
  {
    method: `<b>useRefModResult.isVisible</b>: (params?: {
      controlId?: GroupControlId | undefined;
  } | undefined) => boolean`,
    desc: "Check if optional control or item of group is visible. Using for optional controls.",
    type: "Inside uncontrolled control (UI component)."
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

    const renderUncontroled = () => {
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
              <td>Type control</td>
            </tr>
          </thead>
          <tbody>
            {render()}
            <tr className={styles.tdHead}>
              <td colSpan={3}>API of uncontrolled control</td>
            </tr>
            {renderUncontroled()}
          </tbody>
        </table>
        <Content content={PART_2}/>
      </div>
    )
}
  