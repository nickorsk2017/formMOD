import React from 'react';
import styles from './Content.module.css';

export type ContentParams = {
  content: string;
  preWrap?: boolean;
  language?: string;
  lines?: string;
};

export const Content = (props: ContentParams) => {
    const {content, preWrap, language, lines} = props;
    if(preWrap){
      let lang = "language-javascript";
      if(language){
        lang = `language-${language}`;
      }
      return (
        <pre data-line={lines || null} pre-wraped="true" className={[styles.container, "content-overriding", "line-numbers", lang].join(" ")}>
          <code dangerouslySetInnerHTML={{__html: content}}>
          
        </code></pre>
      )
    }
    return (
      <div pre-wraped={preWrap ? "true": null} owerride-style="true" className={[styles.container, "content-overriding"].join(" ")} dangerouslySetInnerHTML={{__html: content}}>

      </div>
    )
}
  