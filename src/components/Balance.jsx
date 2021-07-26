import React from 'react';
import useGlobalContext from '../context/GlobalState';
const Balance = () => {
  const { transactions } = useGlobalContext();
  // get all the amount

  const amount = transactions.map((transaction) => transaction.amount);

  // calculate the total
  const total = amount
    .reduce((total, amount) => {
      return (total += amount);
    }, 0)
    .toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
};

export default Balance;
