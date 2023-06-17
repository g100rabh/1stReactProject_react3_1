import React, { useState, useRef } from 'react';

import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const collegeInputRef = useRef();

    const [error, setError] = useState();
    
    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        const enteredCollege = collegeInputRef.current.value;
        // console.log(enteredUsername, enteredUserage);
        if(enteredName.trim().length === 0 || enteredAge.trim().length === 0 ){
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age (non-empty values)"
            });
            return;
        }
        if(enteredAge < 0){
            setError({
                title: "Invalid age",
                message: "Please enter a valid age (>0)"
            })
            return;
        }
        props.onAddUser(enteredName, enteredAge, enteredCollege);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        collegeInputRef.current.value = '';

    }

    const errorHandler = () => {
        setError(null);
    }

    // console.log(classes.input)
    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">User Name</label>
                    <input id="username" 
                      type="text" 
                      ref={nameInputRef} 
                    />
                    <label htmlFor="username">Age (year)</label>
                    <input id="age" 
                      type="number" 
                      ref={ageInputRef}
                    />
                    <label htmlFor="collegename">College Name</label>
                    <input id="college" 
                      type="text" 
                      ref={collegeInputRef}
                    />
                    <Button type="submit">Add user</Button>
                </form>
            </Card>
        </Wrapper> 
    );
};

export default AddUser;