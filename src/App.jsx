import React, { useState } from "react";
import Alerts from "../src/cards/Alerts"
import LoginForm from "../src/cards/LoginForm";
import Dashboard from "../src/cards/Dashboard";

export default function App() {
  const [auth, setAuth] = useState({
    token: "",
    user: {},
    meta: {}
  })

  const onLoginSuccess = auth => {
    setAuth(auth);
  };

  const onLogOut = e => {
    setAuth({
      token: "",
      user: {},
      meta: {}
    });
  };

  const currentPage = () => {
    return auth.token ? (
      <Dashboard />
    ) : (
      <LoginForm onLoginSuccess={onLoginSuccess} />
    );
  }

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-info">
        <a className="navbar-brand mr-auto" href="#">
          AppCo
        </a>

        {auth.token && (
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Tasks
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={onLogOut}>
                Log out
              </a>
            </li>
          </ul>
        )}
      </nav>
      <div className="container">{currentPage()}</div>
    </div>
  );
}
