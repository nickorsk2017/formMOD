import React from 'react';
import styles from './HelpUs.module.css';

export type HelpUsParams = {};

export const HelpUs = () => {
    //const {} = props;

    return (
      <div className={styles.container}>Do you like it ? Please support us with a stars github 
        <a className="github-button" href="https://github.com/nickorsk2017/formMOD" data-color-scheme="no-preference: light; light: light; dark: light_high_contrast;" data-icon="octicon-star" data-size="large" aria-label="Star /nickorsk2017/formMOD on GitHub">Star</a>
      </div>
    )
}
  