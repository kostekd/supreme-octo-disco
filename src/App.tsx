import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { logIn, logOut } from "./store/reducers/authReducer/actions";
import { add } from "./store/reducers/counterReducer/actions";

import { Button } from "./components/Button/Button";
import { toastService } from "./components/Toast/toast";
import { Modal } from "./components/Modal/Modal";
import useModal from "./hooks/useModal";

function App() {
  const authentication = useSelector(
    (state: RootState) => state.authentication
  );
  const counter = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  const logInFunction = () => {
    dispatch(logIn());
  };
  const logOutFunction = () => {
    dispatch(logOut());
  };

  const toggleNumber = (value: number) => {
    dispatch(add(value));
  };

  const { isOpen, handleModal } = useModal();

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Totalny playground</p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          DO NOT LEARN REACT
        </a>
        {authentication.isLoggedIn && <div> IsLoggedIn </div>}
        <Button
          onClick={() =>
            toastService.success("What a bullcrap", { autoClose: 2000 })
          }
        >
          Success
        </Button>
        <Button
          onClick={() =>
            toastService.warning("I have no idea what is going on")
          }
        >
          Warning
        </Button>
        <Button onClick={() => toastService.error("You are dudu")}>
          Essa byku
        </Button>
        <button onClick={logInFunction}>Log In</button>
        <button onClick={logOutFunction}>Log Out</button>
        <button onClick={() => toggleNumber(5)}>Add 5</button>
        <button onClick={() => toggleNumber(10)}>Add 10</button>
        <button onClick={() => toggleNumber(-10)}>Subtract 10</button>
        <h1>{counter.value}</h1>
        <Button onClick={handleModal}> Handle Modal </Button>
        <Modal isOpen={isOpen} handleModal={handleModal}>
          <>
            <h1>This is a cool modal what else do you got?</h1>
            <p>We are the best and whatever you say we do it 10 times better</p>
            <ol>
              <li>Woda</li>
              <li>Cola</li>
              <li>Powermachine</li>
            </ol>
            <Button>Hello Mordo</Button>
          </>
        </Modal>
      </header>
    </div>
  );
}

export default App;
