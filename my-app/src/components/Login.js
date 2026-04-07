import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [data, setData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!data.name || !data.email || !data.password) {
      alert("Fill all fields");
      return;
    }
    onLogin(data);
  };

  return (
    <div className="card">
      <h2>Login</h2>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}