import React, { useRef, useState } from "react";
import "./auth.css";
import { useAuth } from "../../contexts/AuthContext";
import eyeHide from "../../assets/icons/eye-hide.png";
import eye from "../../assets/icons/eye.png";

const SignUp = ({ handleRoute }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [errorMsg, setErrorMsg] = useState("");
  const [msgType, setMsgType] = useState(false);
  const { signUp } = useAuth();
  const [visibility, setVisibility] = useState({
    pass: false,
    confirmPass: false,
  });

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      if (!emailRef.current.value || !passwordRef.current.value) {
        setErrorMsg("Enter values for all fields");
        setMsgType(false);
        return null;
      }
      if (confirmPasswordRef.current.value !== passwordRef.current.value) {
        setErrorMsg("Passwords mismatch");
        setMsgType(false);
        return null;
      }
      setErrorMsg("");
      await signUp(emailRef.current.value, passwordRef.current.value);
      setMsgType(true);
      setErrorMsg("Signed Up Successfully");
      handleRoute('home');
    } catch (error) {
      setMsgType(false);
      setErrorMsg("Sign up Failed");
    }
  };
  return (
    <div className="position-class login-container">
      <div className="login-box">
        <h1>Register</h1>
        <form className="login-form" onSubmit={handleSignUp}>
          <div className="textbox">
            <input
              type="text"
              placeholder="Email"
              ref={emailRef}
              name="email"
            />
          </div>
          <div className="textbox relative">
            <img
              className="absolute w-[20px] h-[20px] bottom-8 right-2"
              src={visibility.pass ? eyeHide : eye}
              alt=""
              onClick={() => {
                setVisibility((prev) => ({ ...prev, pass: !prev.pass }));
              }}
            />
            <input
              className="text-black"
              type={visibility.pass ? "text" : "password"}
              placeholder="Password"
              ref={passwordRef}
              name="password"
            />
          </div>
          <div className="textbox relative">
            <img
              className="absolute w-[20px] h-[20px] bottom-8 right-2"
              src={visibility.confirmPass ? eyeHide : eye}
              alt=""
              onClick={() => {
                setVisibility((prev) => ({
                  ...prev,
                  confirmPass: !prev.confirmPass,
                }));
              }}
            />
            <input
              className="text-black"
              type={visibility.confirmPass ? "text" : "password"}
              placeholder="Confirm Password"
              ref={confirmPasswordRef}
              name="confirmPassword"
            />
          </div>

          <button type="submit" className="register-btn">
            Sign Up
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleRoute("sign-up");
            }}
            className="login-button mt-4"
          >
            Go back to Login
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

export default SignUp;
