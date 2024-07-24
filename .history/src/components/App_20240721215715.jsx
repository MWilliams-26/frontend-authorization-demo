import { Routes, Route } from "react-router-dom";
import Ducks from "./Ducks";
import Login from "./Login";
import MyProfile from "./MyProfile";
import Register from "./Register";
import { useState } from "react";
import "./styles/App.css";

function App() {
  const [is]
  return (
    <Routes>
      <Route path="/ducks" element={<Ducks />} />
      <Route path="/my-profile" element={<MyProfile />} />
      <Route
        path="/login"
        element={
          <div className="loginContainer">
            <Login />
          </div>
        }
      />
      <Route
        path="/register"
        element={
          <div className="registerContainer">
            <Register />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
