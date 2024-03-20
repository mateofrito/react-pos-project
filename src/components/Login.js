// Login.js
import React, { useState, useEffect } from "react";


function Login({ onLoginSuccess }) {
  const [stage, setStage] = useState("username"); // 'username' or 'password'
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");
  const [maskedInput, setMaskedInput] = useState("");
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
      setCurrentDate(now.toLocaleDateString());
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, []);

  const validCredentials = [
    { username: "1", password: "1" },
    { username: "403403", password: "0569" },
    // Add more valid credentials as needed
  ];

  const handleNumberClick = (number) => {
    setInput((prevInput) => prevInput + number);
    if (stage === "password") {
      setMaskedInput((prevInput) => prevInput + "*");
    } else {
      setMaskedInput((prevInput) => prevInput + number);
    }
  };

  const handleEnter = () => {
    if (stage === "username") {
      setUsername(input);
      setInput("");
      setMaskedInput("");
      setStage("password");
    } else if (stage === "password") {
      const isValid = validCredentials.some(
        (cred) => cred.username === username && cred.password === input
      );
      if (isValid) {
        onLoginSuccess();
      } else {
        alert("Incorrect Username/Password");
        setInput("");
        setMaskedInput("");
        setStage("username");
        setUsername("");
      }
    }
  };

  const handleClear = () => {
    setInput("");
    setMaskedInput("");
  };

  const buttons = [
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",
    "1",
    "2",
    "3",
    "Clear",
    "0",
    "Enter",
  ].map((label, index) => ({
    label,
    value: label === "Clear" || label === "Enter" ? label : label,
    action:
      label === "Clear"
        ? handleClear
        : label === "Enter"
        ? handleEnter
        : () => handleNumberClick(label),
  }));

  return (
    <div className="login-container">
       
      <div className="login-content">
        <div className="login-image-container"></div>
        <div className="keypad-container">
          <div className="login-input">{maskedInput}</div>
          <div className="keypad">
            {buttons.map((btn, index) => (
              <button
                key={index}
                className={`keypad-button ${
                  btn.label === "Clear"
                    ? "clear-button"
                    : btn.label === "Enter"
                    ? "enter-button"
                    : ""
                }`}
                onClick={btn.action}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="pos-footer">
      <div className="current-time">{currentTime}</div>
      <div className="current-date">{currentDate}</div>
      <div className="register-name">REG 1</div>
      <div className="copyright-info">Copyright (C) Matt Fry 2024</div>
      </div>
    </div>
  );

  // return (
  //   <div className="login-container">

  //     <div className="keypad-container">
  //     <div className="login-input">{maskedInput}</div>
  //       <div className="keypad">
  //         {buttons.map((btn, index) => (
  //           <button
  //             key={index}
  //             className="keypad-button"
  //             onClick={() =>
  //               btn.value ? handleNumberClick(btn.value) : btn.action()
  //             }
  //           >
  //             {btn.label}
  //           </button>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default Login;
