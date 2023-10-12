import React, { useState } from 'react';
import styles from './UserForm.module.css';

import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';


function UserForm(props) {
    const initialUserInput = {
        username: "",
        age: ""
    };
    
    const [userInput, setUserInput] = useState(initialUserInput);
    const [errMsg, setErrMsg] = useState();

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

        if (!username.trim().length || !age) {
            setErrMsg("Please enter a valid name and age (non-empty values).");
            return;
        }
        
        if (age < 0) {
            setErrMsg("Please enter a valid age (> 0).");
            return;
        }
    
        const newUser = { username: username, age: age };

        props.onSaveNewUser(newUser);
        setUserInput(initialUserInput);
        errHandler();
    };
    
    const errHandler = () => setErrMsg("");

    return (
        <>
            <Card className="padded">
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
                            type='number' step='1' 
                            value={userInput.age}
                            onChange={handleInput}>
                        </input>
                    </div>
                    <button type="submit" className={styles.button}>Add User</button>
                </form>
            </Card>

            {errMsg && 
                <ErrorModal 
                    header={"Invalid Input"} 
                    msg={errMsg} 
                    btn={"Okay"} 
                    onConfirm={errHandler} 
                />
            }
        </>
    );
}

export default UserForm;