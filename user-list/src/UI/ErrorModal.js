import React, { useState } from 'react';

import styles from './ErrorModal.module.css';

import Card from './Card';


function ErrorModal(props) {
    const cardClasses = `bg-primary ${styles.error}`;

    return (
        <Card className={cardClasses}>
            <div className={styles['error-header']}>{props.header}</div>
            <form>
                <div className={styles['error-message']}>
                    {props.msg}
                </div>
                <button onClick={props.onConfirm} className={styles.button}>
                    {props.btn}
                </button>
            </form>
        </Card>
    );
}

export default ErrorModal;