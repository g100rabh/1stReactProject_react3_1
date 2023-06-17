

import React, { useState } from 'react';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';

function App() {

  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge, uCollege) => {
    setUserList((prevUserList) => {
      return [...prevUserList, {id: Math.random().toString(), name: uName, age: uAge, college: uCollege}]
    })
  }
  console.log(userList)
  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList}/>
    </React.Fragment>
  );
}

export default App;
