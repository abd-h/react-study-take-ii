import React, { useState } from "react";

import Button from "./Button";
// import { styled } from "styled-components";

import Input from "./Input";

import "./AuthInputs.css";

// const ControlContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
//   margin-block-end: 1.5rem;
// `;

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
    <div id="auth-inputs" className="w-full max-w-md p-8 mx-auto rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800">
      <div className="flex flex-col gap-2 mb-6">
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
      </div>
      <div className="flex justify-end gap-4">
        <Button type="button">
          Create new account
        </Button>
        <Button onClick={submitHandler} type="button">
          Sign in
        </Button>
      </div>
    </div>
  );
};

export default AuthInputs;
