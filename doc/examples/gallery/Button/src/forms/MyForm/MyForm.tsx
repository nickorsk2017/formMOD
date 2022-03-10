import React from 'react';
import { Button } from "../../ui";
import styles from './MyForm.module.css';

export const MyForm = () => {

    return (
        <form className={styles.form}>
           <Button type="submit" title="Submit"/>
        </form>
    )
}