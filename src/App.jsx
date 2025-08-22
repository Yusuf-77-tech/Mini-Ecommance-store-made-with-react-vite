import React, { useState } from "react";

function App() {
  // state to hold list of expenses
  const [expenses, setExpenses] = useState([]);

  // state to hold form input values
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  // function to handle form submit
  const handleAddExpense = (e) => {
    e.preventDefault();

    if (!title || !amount) return; // don't add empty values

    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
    };

    // update state with new expense
    setExpenses([...expenses, newExpense]);

    // clear inputs
    setTitle("");
    setAmount("");
  };

  return (
    <div style={{ maxWidth: "500px", margin: "40px auto", fontFamily: "sans-serif" }} className="app">
      <h1>💰 Expense Tracker</h1>

      {/* Form */}
      <form onSubmit={handleAddExpense} style={{ marginBottom: "20px" }}>
        <div className="form">
        <input
          type="text"
          placeholder="Expense title (e.g. Food)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <button type="submit">Add</button>
        </div>
      </form>

      {/* Expense List */}
      <ul className="expense-list"> 
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.title} - ₦{expense.amount}
          </li>
        ))}
      </ul>

      {/* Total */}
      <div className="total">
      <h3>
        Total: ₦
        {expenses.reduce((total, item) => total + item.amount, 0)}
      </h3>
      </div>
    </div>
  );
}

export default App;