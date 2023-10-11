import React, { useState } from 'react';
import UserForm from '../UI/UserForm';
import styles from './NewUser.module.css';


function NewUser(props) {
    const saveNewUserHandler = (enteredNewUser) => {
        props.onAddUser(enteredNewUser);
    };
    
    return (
        <UserForm onSaveNewUser={saveNewUserHandler} />
    );
}

export default NewUser;