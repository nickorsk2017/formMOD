import React from 'react'
import styles from './Button.module.css';

export type ButtonParams = {
  onClick?: (event: React.SyntheticEvent) => void,
  title: string, 
  type?: "button" | "submit" | "reset" | undefined,
  theme?: "LIGHT" | "RED" | undefined
};

export const Button = (props: ButtonParams) => {
    const {type, onClick, title, theme} = props;

    const getTheme = () => {
      switch(theme){
        case("LIGHT"):
          return styles.containerLight
        case("RED"):
          return styles.containerRed
        default:
        return styles.container
      }
    }

    return (
      <button type={type || "button"} onClick={onClick} className={getTheme()}>
        {title}
      </button>
    )
}
  