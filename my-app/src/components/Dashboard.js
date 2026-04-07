import React, { useState } from "react";
import CreditForm from "./CreditForm";

export default function Dashboard({ user }) {
  const [score, setScore] = useState(null);

  const calculateScore = (form) => {
    let s = 0;
    const income = parseFloat(form.income) || 0;
    const expenses = parseFloat(form.expenses) || 0;

    if (income > 50000) s += 30;
    else if (income > 20000) s += 20;
    else s += 10;

    if (income - expenses > 20000) s += 30;
    else if (income - expenses > 10000) s += 20;
    else s += 10;

    if (form.employment === "stable") s += 20;
    else s += 10;

    if (form.creditHistory === "good") s += 20;
    else s += 10;

    setScore(s);
  };
  return (
    <div className="dashboard">
      <h1>Welcome, {user.name}</h1>
      <CreditForm onSubmit={calculateScore} />

      {score !== null && (
        <div className="result">
          <h2>Score: {score}</h2>
          <p>{score > 70 ? "Approved" : "Rejected"}</p>
        </div>
      )}
    </div>
  );
}