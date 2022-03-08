import React from 'react'
import styles from './Button.module.css';

export type ButtonProps = {
  onClick?: (event: React.SyntheticEvent) => void,
  title: string, 
  type?: "button" | "submit" | "reset" | undefined,
  theme?: "LIGHT" | "RED" | undefined
};

export const Button = (props: ButtonProps) => {
    const {type, onClick, title, theme} = props;

    const getTheme = () => {
      switch(theme){
        case("RED"):
        return styles.containerRed
        case("LIGHT"):
          return styles.containerLight
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
  