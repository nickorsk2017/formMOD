import React from 'react'
import styles from './Button.module.css';

export type ButtonProps = {
  onClick?: (event: React.SyntheticEvent) => void,
  title: string, 
  type?: "button" | "submit" | "reset" | undefined,
};

export const Button = (props: ButtonProps) => {
    const {type, onClick, title} = props;

    return (
      <button type={type || "button"} onClick={onClick} className={styles.container}>
        {title}
      </button>
    )
}
  