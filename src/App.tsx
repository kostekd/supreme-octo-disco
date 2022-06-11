import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { logIn, logOut } from './store/reducers/authReducer/actions';
import { add } from './store/reducers/counterReducer/actions';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from './components/Button/Button';
import { toastService } from './components/Toast/toast';

function App() {
  const authentication = useSelector((state: RootState) => state.authentication);
  const counter = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  const logInFunction = () => {
    dispatch(logIn());
  }
  const logOutFunction = () => {
    dispatch(logOut());
  }

  const toggleNumber = (value: number) => {
    dispatch(add(value));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {authentication.isLoggedIn && <div> IsLoggedIn </div>}
        <Button onClick={() => toastService.success('What a bullcrap', {autoClose:2000})} label="Success" />
        <Button onClick={() => toastService.warning('I have no idea what is going on')} label="Warning" />
        <Button onClick={() => toastService.error('You are dudu')} label="Failure" />
        <button onClick={logInFunction}>Log In</button>
        <button onClick={logOutFunction}>Log Out</button>
        <button onClick={() => toggleNumber(5)}>Add 5</button>
        <button onClick={() => toggleNumber(10)}>Add 10</button>
        <button onClick={() => toggleNumber(-10)}>Subtract 10</button>
        <h4>{counter.value}</h4>    
      </header>
    </div>
  );
}

export default App;
