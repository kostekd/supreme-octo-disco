import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { APP_URLS } from "./shared/enums";
import { HomePage } from "./modules/Home/HomePage/HomePage";
import { LoginPage } from "./modules/Login/LoginPage/LoginPage";
import { LogoutPage } from "./modules/Logout/LogoutPage/LogoutPage";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path={APP_URLS.HOME} element={<HomePage />} />
        <Route path={APP_URLS.LOGIN} element={<LoginPage />} />
        <Route path={APP_URLS.LOGOUT} element={<LogoutPage />} />
      </Routes>
    </div>
  );
}

export default App;
