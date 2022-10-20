import { getValue } from '@testing-library/user-event/dist/utils';
import { useState } from 'react';
import './App.css';
import UserInput from './components/UserInput';

function App() {
  const [userInfo, setUserInfo] = useState([""]);

  const handleUserChange = (e) => {
    setUserInfo({
      ...userInfo,
      userInfo: e.target.value
    })
  }

  return (
    <div className="App">
      <UserInput setUserInfo={handleUserChange} />

    </div>
  );
}

export default App;
