import React, { useState } from 'react';
import NewUser from './components/NewUser';
import UserList from './components/UserList';


function App() {
    const [userList, setUserList] = useState([]);
    
    const addUserHandler = newUser => {
        setUserList(prevList => {
            return [newUser,...prevList];
        });
    }
    
    let content = ( <p style={{textAlign: "center"}}>No users added.</p> );

    if (userList.length > 0) {
        content = ( <UserList data={userList} /> );
    }

    return (
        <div>
            <section id="userInput">
                <NewUser onAddUser={addUserHandler} />
            </section>
            <section id='userList'>
                {content}
            </section>
        </div>
    );
}

export default App;
