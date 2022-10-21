import { getValue } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import "./App.css";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, age) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: userName, age: age }];
    });
  };

  return (
    <div className="App">
      <UserInput onAddUser={addUserHandler} />
      <UserOutput users={usersList} />
    </div>
  );
}

export default App;
