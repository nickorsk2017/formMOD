import React from 'react'
import {Content} from "../../ui";
import {PART_1, PART_2} from "./docs";
import styles from './API.module.css';

export type APIProps = {};

const PREFIX = process.env.prefixMOD || "/";

const CONTENT = [
  {
    method: "<b>formState</b>",
    desc: "Current state of form. Avoid change it without API formMod.",
    type: "Property of form"
  },
  {
    method: "<b>setViewMode</b>: (viewMode: boolean) => boolean",
    desc: "Set view mode of form.",
    type: "Inside form"
  },
  {
    method: "<b>isViewMode</b>: () => boolean",
    desc: "Check view mode endabled.",
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
    method: "<b>getValue</b>: (inputName?: string, props?: { inputId?: GroupInputId; cloneDeep?: boolean } ) => ",
    desc: "Get value of input or form value.<br/><br/> - If <b>inputName</b> filled return an input value else a form value. <br/> - If <b>inputId</b> filled return value of group item.<br/> - Property <b>cloneDeep</b> return clonned value - use it if modify it then.",
    type: "Inside form"
  },
  {
    method: `<b>setValue</b>: (
      inputName: InputName,
      inputValue: InputValue,
      props?: {
        skipUpdate?: boolean;
        inputId?: GroupInputId;
        skipValidation?: boolean;
      }) => false | FormState`,
    desc: "Set value of input or group item. <br/> - If property <b>skipUpdate</b> is true, the rendering will be canceled. <br/> - If using property <b>inputId</b> will set value for a group item.<br/> Return a new form state or false.",
    type: "Inside form"
  },
  {
    method: `<b>setValues</b>: ( inputsValues: FormValue,
      props?: { init?: boolean; skipUpdate?: boolean }) => false | FormState`,
    desc: `Set value for a multiple inputs. <br/> - If <b>init</b> has true value set init value one time (for edit mode). Please reed details <a href="/#${PREFIX}editmode/">here</a> <br/> - If <b>skipUpdate</b> skiped rendering. <br/>`,
    type: "Inside form"
  },
  {
    method: "<b>validate</b>: (updateValidation: boolean, callback: {valid: boolean, formValue: any}) => FormState",
    desc: "Validate a form. Return new state of form",
    type: "Inside form"
  },
  {
    method: "<b>getError</b>: (inputName: InputName, props?: { inputId?: GroupInputId }) => string | null",
    desc: "Get error of input or group item. Return a message of error or null if value is valid.",
    type: "Inside form"
  },
  {
    method: "<b>resetForm</b>: () => FormState",
    desc: "Reset a form state to init value.",
    type: "Inside form"
  },
  {
    method: "<b>isVisible</b>: (inputName: string) => boolean",
    desc: "Check if a input is visible. Using for an optional inputs.",
    type: "Inside form"
  },
  {
    method: "<b>useRefMod</b>: (inputName: InputName) => refMod",
    desc: "Create a reference object for smart input component.<br/>",
    type: "Inside form"
  },
];


const CONTENT_SMART = [
  {
    method: "<b>refMod</b>",
    desc: "The link of smart input with API.",
    type: "Property. Inside form"
  },
  {
    method: "<b>refMod.ref</b>",
    desc: "Reference for JSX intput element.",
    type: "Inside smart input (UI component)."
  },
  {
    method: "<b>refMod.isViewMode</b>: () => boolean",
    desc: "Check if a form in view mode. Render a JSX for detail page.",
    type: "Inside smart input (UI component)."
  },
  {
    method: `<b>refMod.getError</b>: (params?: {
      inputId?: GroupInputId;
    }) => string | null`,
    desc: "Get error of input or group item.",
    type: "Inside smart input (UI component)."
  },
  {
    method: `<b>refMod.getValue</b>: (params?: {
      inputId?: GroupInputId;
    }) => InputValue`,
    desc: "Get value of input or group item.",
    type: "Inside smart input (UI component)."
  },
  {
    method: `<b>refMod.isVisible</b>: (params?: {
      inputId?: GroupInputId;
    }) => boolean`,
    desc: "Check if optional input or group item is visible. Using for optional inputs.",
    type: "Inside smart input (UI component)."
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
      return CONTENT_SMART.map((content, index) => {
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
              <td colSpan={3}>API for smart input component</td>
            </tr>
            {renderUncontrolled()}
          </tbody>
        </table>
        <Content content={PART_2}/>
      </div>
    )
}
  