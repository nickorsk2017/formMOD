import React from 'react';
import {getCodeSnippet} from "../../../utils";
import {Content} from "../../../ui";
import {PART_1, EXAMPLE_1, EXAMPLE_2} from "./_docs";
import styles from './Stores.module.css';

export const Stores = () => {
    const _EXAMPLE_1 = getCodeSnippet(EXAMPLE_1);
    const _EXAMPLE_2 = getCodeSnippet(EXAMPLE_2);

    return (
      <div className={styles.container}>
        <Content content={PART_1}/>
        When user changing a data the system modifeid it.<br/>
        It means that it mutable data.<br/>
        If you uses data store, react context you must do it safe.<br/>     <br/>
        <div className="formmod__subtitle">Redux, React context like </div>
        <Content minWidth="750px" preWrap={true} content={_EXAMPLE_1.result}/>
        <br/>
        Use <b>cloneDeep</b> helper and <b>data converters</b> (see in recomendations).
        <br/><br/>
        <div className="formmod__subtitle">Mobx</div>
        <Content minWidth="750px"preWrap={true} content={_EXAMPLE_2.result}/>
        <br/>
        For Mobx use <b>toJS</b> helper.
        <br/><br/>
      </div>
    )
}
  