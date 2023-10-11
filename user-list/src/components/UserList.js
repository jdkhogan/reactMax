import React from 'react';
import styles from './UserList.module.css';

const UserList = ({data}) => {
    
    return (
        <div className={styles.userlist}>
            {data.map((user, i) =>
                <div className={styles.user} key={'user_' + i+1}>
                    {user.username} ({user.age} years old)
                </div>
            )}
      </div>
    );
}

export default UserList;