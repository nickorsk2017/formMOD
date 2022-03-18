import React from 'react';
import {MyForm} from "examples/blogExample/src/forms/MyForm/MyForm";
import {Content} from "../../ui";
import {PART_1} from "./_docs";
import styles from './BlogExample.module.css';

export const BlogExample = () => {

    return (
      <div className={styles.container}>
        <Content content={PART_1}/>
        <MyForm/>
        <br/>
        <div className="formmod__source">
          <a href="https://github.com/nickorsk2017/formMOD/raw/master/doc/examples/blogExample/formMOD-example.zip">Download example source</a>/
          <a target="_blank" href="https://github.com/nickorsk2017/formMOD/tree/master/doc/examples/blogExample">See example source</a>
        </div>
      </div>
    )
}
  