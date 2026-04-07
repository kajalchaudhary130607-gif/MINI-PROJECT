import React, { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import "./App.css";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="app-container">
      {!user ? (
        <Login onLogin={setUser} />
      ) : (
        <Dashboard user={user} />
      )}
    </div>
  );
}