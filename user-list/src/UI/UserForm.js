import React, { useState } from 'react';
import styles from './UserForm.module.css';


function UserForm(props) {
    const initialUserInput = {
        username: "",
        age: ""
    };

    const [userInput, setUserInput] = useState(initialUserInput);
    
    const handleInput = (e) => {
        setUserInput((prevState) => {
            return {
                ...prevState, 
                [e.target.id]: e.target.value
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = userInput.username; 
        const age = +userInput.age; 

        // TODO: Add logic if either is empty
        // TODO: Add logic if number is out of range
        // In both cases, 
        // 1) modal should be displayed and 
        // 2) form values should be maintained
    
        const newUser = { username: username, age: age };

        props.onSaveNewUser(newUser);
        setUserInput(initialUserInput);
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <div className={styles['new-user__control']}>
                <label htmlFor='username'>Username</label>
                <input 
                    id='username' name='username' type='text' 
                    value={userInput.username}
                    onChange={handleInput}>
                </input>
            </div>
            <div className={styles['new-user__control']}>
                <label htmlFor='age'>Age (Years)</label>
                <input 
                    id='age' name='age'
                    type='number' min='0' step='1' 
                    value={userInput.age}
                    onChange={handleInput}>
                </input>
            </div>
            <button type="submit" className={styles.button}>Add User</button>
        </form>
    );
}

export default UserForm;