import React, { useState } from "react";

import AddUser from './components/AddUser';
import UsersList from './components/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (username, age) => {
    setUsersList((prevUsersList) => {
      // return [...prevUsersList, {username: username, age: age}];
      return [...prevUsersList, {username, age}];
    })
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      {usersList.length > 0 ? <UsersList users={usersList}/> : null}
    </div>
  );
}

export default App;
