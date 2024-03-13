import React from "react";
import { useState } from "react";
import Login from './components/Login';
import PosOrderEntry from "./components/PosOrderEntry";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="app-container">
      {!isLoggedIn ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <PosOrderEntry onLogout={handleLogout} />
      )}
    </div>
  );
}
 
export default App;


