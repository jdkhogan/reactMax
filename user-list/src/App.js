import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';


function App() {
    const [userList, setUserList] = useState([]);
    
    const addNewUser = newUser => {
        setUserList(prevList => {
            const updatedList = [...prevList];
            updatedList.unshift(newUser);
            return updatedList;
        });
    }
    
    let content = ( <p style={{textAlign: "center"}}>No users added.</p> );

    if (userList.length > 0) {
        content = ( <UserList data={userList} /> );
    }

    return (
        <div>
            <section id="userInput">
                <UserForm userList={userList} onAdd={addNewUser} />
            </section>
            <section id='userList'>
                {content}
            </section>
        </div>
    );
}

export default App;
