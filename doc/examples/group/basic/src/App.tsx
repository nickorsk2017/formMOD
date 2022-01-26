import React from 'react';
import { MyForm } from './forms/MyForm/MyForm';
import styles from './App.module.css';

export default () => {
    return <div className={styles.container}>
        <h1>Example: Form with basic inputs</h1>
        <MyForm/>
    </div>
}