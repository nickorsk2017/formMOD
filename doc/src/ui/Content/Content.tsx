import React from 'react';
import styles from './Content.module.css';

export type ContentParams = {
  content: string;
  preWrap?: boolean;
};

export const Content = (props: ContentParams) => {
    const {content, preWrap} = props;
    return (
      <div pre-wraped={preWrap ? "true": null} owerride-style="true" className={[styles.container, "content-overriding"].join(" ")} dangerouslySetInnerHTML={{__html: content}}>

      </div>
    )
}
  