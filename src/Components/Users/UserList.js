import React from "react";

import classes from './UserList.module.css';
import Card from "../UI/Card";

const UserList = (props) => {
 console.log(classes.users)
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map((user) => (
                    <li key={user.id}>{user.name} ({user.age} years old) {user.college}</li>
                ))}
            </ul>
        </Card>
    )
};

export default UserList;