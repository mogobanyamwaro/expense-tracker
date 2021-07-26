import React from 'react';
import useGlobalContext from '../context/GlobalState';
const IncomeExpenses = () => {
  const { transactions } = useGlobalContext();
  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts.filter((amount) => amount > 0);
  const expenses = amounts.filter((amount) => amount < 0);

  const totalIcome = income
    .reduce((total, amount) => {
      return (total += amount);
    }, 0)
    .toFixed(2);

  const totalExpenses = expenses
    .reduce((total, amount) => {
      return (total += amount);
    }, 0)
    .toFixed(2);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${totalIcome}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">${totalExpenses}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
