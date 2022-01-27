import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef("");
  const ageInputRef = useRef("");

  const [errorMessage, setErrorMessage] = useState("");

  let isValid = true;

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    console.log("enteredName: ", enteredName);
    console.log("enteredUserAge: ", enteredUserAge);

    checkValidness(enteredName, enteredUserAge)

    if (isValid) {
      console.log(`submitting form with ${enteredName} of ${enteredUserAge} years old`);
      props.onAddUser(enteredName, enteredUserAge);

      nameInputRef.current.value = "";
      ageInputRef.current.value = "";
    }
  };

  const checkValidness = (username, age) => {
    if (age.trim().length === 0) {
      setErrorMessage("Age required");
      isValid = false;
    } else if (+age < 1) {
      setErrorMessage("Age too low");
      isValid = false;
    } else if (username.trim().length === 0) {
      setErrorMessage("Username required");
      isValid = false;
    }
  }

  const dismissHandler = () => {
    setErrorMessage("");
  };

  return (
    <React.Fragment>
      {errorMessage && <ErrorModal message={errorMessage} onDismiss={dismissHandler}/>}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label>Username</label>
          <input
            type="text"
            ref={nameInputRef}
          />
          <label>Age (years)</label>
          <input
            type="number"
            step="1"
            max="110"
            ref={ageInputRef}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
