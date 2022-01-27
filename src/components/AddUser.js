import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  let isValid = true;

  const addUserHandler = (event) => {
    event.preventDefault();

    checkValidness()

    if (isValid) {
      console.log(`submitting form with ${enteredUsername} of ${enteredAge} years old`);
      props.onAddUser(enteredUsername, enteredAge);

      setEnteredUsername("");
      setEnteredAge("");
    }
  };

  const checkValidness = () => {
    if (enteredAge.trim().length === 0) {
      setErrorMessage("Age required");
      isValid = false;
    } else if (+enteredAge < 1) {
      setErrorMessage("Age too low");
      isValid = false;
    } else if (enteredUsername.trim().length === 0) {
      setErrorMessage("Username required");
      isValid = false;
    }
  }

  const dismissHandler = () => {
    setErrorMessage("");
  };

  const usernameChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredAge(event.target.value);
  };

  return (
    <React.Fragment>
      {errorMessage && <ErrorModal message={errorMessage} onDismiss={dismissHandler}/>}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label>Username</label>
          <input
            type="text"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          />
          <label>Age (years)</label>
          <input
            type="number"
            step="1"
            max="110"
            onChange={ageChangeHandler}
            value={enteredAge}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
