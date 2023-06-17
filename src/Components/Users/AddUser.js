import React, { useState } from 'react';

import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredUserage, setEnteredUserage] = useState('');
    const [error, setError] = useState();
    
    const addUserHandler = (event) => {
        event.preventDefault();
        // console.log(enteredUsername, enteredUserage);
        if(enteredUsername.trim().length === 0 || enteredUserage.trim().length === 0 ){
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age (non-empty values)"
            });
            return;
        }
        if(enteredUserage < 0){
            setError({
                title: "Invalid age",
                message: "Please enter a valid age (>0)"
            })
            return;
        }
        props.onAddUser(enteredUsername, enteredUserage);
        setEnteredUserage('');
        setEnteredUsername('');
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }
    const userageChangeHandler = (event) => {
        setEnteredUserage(event.target.value);
    }

    const errorHandler = () => {
        setError(null);
    }


    // console.log(classes.input)
    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">User Name</label>
                    <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
                    <label htmlFor="username">Age (year)</label>
                    <input id="age" type="number" value={enteredUserage} onChange={userageChangeHandler}/>
                    <Button type="submit">Add user</Button>
                </form>
            </Card>
        </div>
        
    );
};

export default AddUser;