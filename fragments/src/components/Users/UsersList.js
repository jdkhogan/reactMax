import React from 'react';

import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.length ? 
          props.users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.age} years old)
            </li>
          )) :
            <p>No users found</p>
        }
      </ul>
    </Card>
  );
};

export default UsersList;
