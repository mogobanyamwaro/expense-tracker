import React, { useState } from 'react';
import useGlobalContext from '../context/GlobalState';

const AddTransaction = () => {
  const { addTransaction, addToLocalStorage } = useGlobalContext();
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 1000),
      text,
      amount: parseInt(amount),
    };
    // addTransaction(newTransaction);
    addToLocalStorage(addTransaction(newTransaction));
  };

  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter the text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive -income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="enter amount ...."
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
