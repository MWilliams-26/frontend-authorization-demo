import { useState } from "react";
import { Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";


import Ducks from "./Ducks";
import Login from "./Login";
import MyProfile from "./MyProfile";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute";
import * as auth from "../utils/auth";
import "./styles/App.css";
import { setToken } from "../utils/token";

function App() {
  const [userData, setUserData] = useState({ username: "", email: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();

  const handleRegistration = ({
    username,
    email,
    password,
    confirmPassword,
  }) => {
    if (password === confirmPassword) {
      auth
        .register(username, password, email)
        .then(() => {
          navigate("/login");
        })
        .catch(console.error);
    }
  };

  const handleLogin = ({ username, password }) => {
    if (!username || !password) {
      return;
    }

    auth
      .authorize(username, password)
      .then((data) => {
        if (data.jwt) {
          setToken(data.jwt);
          setUserData(data.user);
          setIsLoggedIn(true);
          const redirectPath = ltion.state?.from?.pathname || "/ducks";
          navigate("/ducks");
        }
      })
      .catch(console.error);
  };

  useEffect(() => {
    const jwt = getToken();

    if (!jwt) {
      return;
    }

    api
      .getUserInfo(jwt)
      .then(({ username, email }) => {
        // If the response is successful, log the user in, save their 
        // data to state, and navigate them to /ducks.
        setIsLoggedIn(true);
        setUserData({ username, email });
        navigate("/ducks");
      })
      .catch(console.error);
  }, []);

return (
  <Routes>
    <Route
      path="/ducks"
      element={
        <ProtectedRoute isLoggedIn={isLoggedIn}>
          <Ducks />
        </ProtectedRoute>
      }
    />

    <Route
      path="/my-profile"
      element={
        <ProtectedRoute isLoggedIn={isLoggedIn}>
          <MyProfile userData={userData} />
        </ProtectedRoute>
      }
    />
    <Route
      path="/login"
      element={
        <div className="loginContainer">
          <Login handleLogin={handleLogin} />
        </div>
      }
    />
    <Route
      path="/register"
      element={
        <div className="registerContainer">
          <Register handleRegistration={handleRegistration} />
        </div>
      }
    />
    <Route
      path="*"
      element={
        isLoggedIn ? (
          <Navigate to="/ducks" replace />
        ) : (
          <Navigate to="/login" replace />
        )
      }
    />
    <Route
      path="/register"
      element={
        <div className="registerContainer">
          <Register handleRegistration={handleRegistration} />
        </div>
      }
    />
  </Routes>
);
}

export default App;
