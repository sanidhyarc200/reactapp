import { useState } from "react";
import "./app.css";
import Profile from "./profile";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [islogged, setIslogged] = useState(true);
  const handleOnclick = () => {
    if (!email && !password) {
      setEmailError("please enter email");
      setPasswordError("please enter password");
      return;
    }

    if (!email) {
      setEmailError("please enter email");
      return;
    }

    if (!password) {
      setPasswordError("please enter full password ");
      return;
    }

    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(mailformat)) {
      setEmailError("please enter valid email");
      return;
    }

    if (password.length <= 3) {
      setPasswordError("password length should be more than 3");
      return;
    }

    setLoggedIn(true);
    setIslogged(false);
  };

  return (
    <div style={{ height: "100vh" }}>
      {islogged && (
        <>
          <div className="container">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="err">{emailError}</span>
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="err">{passwordError}</span>
            <button onClick={handleOnclick}>Submit</button>
          </div>
        </>
      )}

      {loggedIn && <Profile email={email} password={password} />}
    </div>
  );
};
export default Login;
