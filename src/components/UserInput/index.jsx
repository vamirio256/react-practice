import { useState } from "react";
import Button from "../Button";
import Card from "../Card";
import ErrorModal from "../ErrorModal";
import "./style.css";

const UserInput = (props) => {
  const [enterUserName, setEnterUsername] = useState("");
  const [enterAge, setEnterAge] = useState("");
  const [error, setError] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enterUserName.trim().length === 0 || enterAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age.",
      });
      return;
    }
    if (enterAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(enterUserName, enterAge);
    setEnterAge("");
    setEnterUsername("");
  };

  const usernameChangeHandler = (e) => {
    setEnterUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnterAge(e.target.value);
  };

  const errorHandler = (e) => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onHandleError={errorHandler}
        />
      )}
      <Card className="user-input">
        <form onSubmit={addUserHandler}>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              value={enterUserName}
              onChange={usernameChangeHandler}
            ></input>
          </div>
          <div className="input-group">
            <label>Age (Years)</label>
            <input
              type="number"
              value={enterAge}
              onChange={ageChangeHandler}
            ></input>
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default UserInput;
