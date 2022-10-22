import { useRef, useState } from "react";
import Button from "../Button";
import Card from "../Card";
import ErrorModal from "../ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import "./style.css";

const UserInput = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();
    const enterName = nameInputRef.current.value;
    const enterAge = ageInputRef.current.value;
    if (enterName.trim().length === 0 || enterAge.trim().length === 0) {
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
    props.onAddUser(enterName, enterAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = (e) => {
    setError(null);
  };

  return (
    <Wrapper>
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
            <input type="text" id="username" ref={nameInputRef}></input>
          </div>
          <div className="input-group">
            <label>Age (Years)</label>
            <input type="number" id="age" ref={ageInputRef}></input>
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default UserInput;
