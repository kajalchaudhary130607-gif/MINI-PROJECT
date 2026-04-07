import React, { useState } from "react";

export default function CreditForm({ onSubmit }) {
  const [form, setForm] = useState({
    income: "",
    expenses: "",
    employment: "",
    creditHistory: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="card">
      <h2>Financial Details</h2>
      <input name="income" placeholder="Income" onChange={handleChange} />
      <input name="expenses" placeholder="Expenses" onChange={handleChange} />

      <select name="employment" onChange={handleChange}>
        <option value="">Employment</option>
        <option value="stable">Stable</option>
        <option value="unstable">Unstable</option>
      </select>
      <select name="creditHistory" onChange={handleChange}>
        <option value="">Credit History</option>
        <option value="good">Good</option>
        <option value="bad">Bad</option>
      </select>

      <button onClick={() => onSubmit(form)}>Calculate</button>
    </div>
  );
}