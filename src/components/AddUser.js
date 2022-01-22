import React, { useState } from 'react';

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(`submitting form with ${username} of ${age} years old`)
  }

  const usernameChangeHandler = (event) => {
    console.log(event.target.value);
    setUsername(event.target.value);
  }

  const ageChangeHandler = (event) => {
    console.log(event.target.value)
    setAge(event.target.value);
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <label>Username</label>
        <input type="text" onChange={usernameChangeHandler} />
      </div>
      <div>
        <label>Age (years)</label>
        <input type="number" step="1" max="110"onChange={ageChangeHandler} />
      </div>

      
    <button type="submit">Add User</button>
  </form>
  );
}

export default AddUser;