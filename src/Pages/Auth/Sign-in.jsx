import React, { useRef, useState } from "react";
import "./auth.css";
import eyeHide from "../../assets/icons/eye-hide.png";
import eye from "../../assets/icons/eye.png";
import { useAuth } from "../../contexts/AuthContext";

const SignIn = ({ handleRoute }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [errorMsg, setErrorMsg] = useState("");
  const [msgType, setMsgType] = useState(false);
  const { login } = useAuth();
  const [visibility, setVisibility] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!emailRef.current.value || !passwordRef.current.value) {
        setErrorMsg("Enter values for all fields");
        setMsgType(false);
        return null;
      }

      setErrorMsg("");
      await login(emailRef.current.value, passwordRef.current.value);
      setMsgType(true);
      setErrorMsg("Log In Successfully");
      handleRoute('home')
    } catch (error) {
      setMsgType(false);
      setErrorMsg("Sign up Failed");
    }
  };
  return (
    <div className="position-class login-container">
      <div className="login-box">
        <h1>Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="textbox">
            <input className="text-black" type="email" ref={emailRef} placeholder="Email" name="Email" />
          </div>
          <div className="textbox relative">
            <img
              className="absolute w-[20px] h-[20px] bottom-8 right-2"
              src={visibility ? eyeHide : eye}
              alt=""
              onClick={() => {
                setVisibility(!visibility);
              }}
            />
            <input className="text-black" type={visibility ? "text" : "password"} ref={passwordRef} placeholder="Password" name="password" />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          <button
            className="register-btn mt-4"
            onClick={(e) => {
              e.preventDefault();
              handleRoute("sign-up");
            }}
          >
            Register / New User
          </button>
        </form>
        {errorMsg && (
          <div
            className={`toast-class ${
              msgType ? "success-class" : "error-class"
            }`}
          >
            {errorMsg}
          </div>
        )}
      </div>
    </div>
  );
};

export default SignIn;
