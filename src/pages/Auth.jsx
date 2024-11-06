import React from "react";
import { useState } from "react";
import "../Assets/Styles/auth.css";
import SignInForm from "../Components/Auth/SignIn";
import SignUpForm from "../Components/Auth/SignUp";

const Auth = () => {
  const [type, setType] = useState("signIn");
  const handleOnClick = (text) => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");
  return (
    <div className="registration">
      <div className={containerClass} id="container">
        <SignUpForm />
        <SignInForm />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>تمتلك حساب بالفعل؟</h1>
              <br />
              <button
                className="ghost"
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                تسجيل الدخول
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>اسم البيئة</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
