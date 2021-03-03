import React from 'react';
import styles from './Content.module.css';

export type ContentParams = {
  content: string
};

export const Content = (props: ContentParams) => {
    const {content} = props;
    return (
      <div owerride-style="true" className={[styles.container, "content-overriding"].join(" ")} dangerouslySetInnerHTML={{__html: content}}>

      </div>
    )
}
  