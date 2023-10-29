import React, { useState } from "react";

import Button from "./Button";
import { styled } from "styled-components";

import Input from "./Input";

import "./AuthInputs.css";

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-block-end: 1.5rem;
`;

const AuthInputs = (props) => {
  const [enteredEmail, setenteredEmail] = useState("");
  const [enteredPassword, setenteredPassword] = useState(""),
    [submitBtn, setSubmitBtn] = useState(false);

  const inputHandler = (identity, value) => {
    if (identity === "email") {
      setenteredEmail((pre) => (pre = value));
    } else {
      setenteredPassword((pre) => (pre = value));
    }
  };

  const submitHandler = () => {
    setSubmitBtn((prevState) => (prevState = true));
  };
  console.log(enteredEmail.length);

  // Checking for email and password validity;

  const emailNotValid = submitBtn && !enteredEmail.includes("@");

  const passwordNotValid = submitBtn && !enteredPassword.trim().length < 6;

  return (
    <div className="auth-input">
      <ControlContainer>
        <Input
          label="Email"
          $invalid={emailNotValid}
          onChange={(e) => inputHandler("email", e.target.value)}
          type="email"
          name="email"
          id="email"
        />

        <Input
          label="Password"
          $invalid={passwordNotValid}
          type="password"
          name="password"
          id="password"
          onChange={(e) => inputHandler("password", e.target.value)}
        />
      </ControlContainer>
      <div className="action">
        <button type="button" className="text-btn">
          Create new account
        </button>
        <Button onClick={submitHandler} type="button" className="button">
          Sign in
        </Button>
      </div>
    </div>
  );
};

export default AuthInputs;
