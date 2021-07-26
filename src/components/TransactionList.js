import React from 'react';
import useGlobalContext from '../context/GlobalState';
import Transaction from './Transaction';
const TransactionList = () => {
  const { transactions } = useGlobalContext();

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {/* <li className="minus">
          Cash <span>$400</span>
          <button className="delete-btn">x</button>
        </li> */}
        {transactions.map((item) => {
          return <Transaction key={item.id} {...item} />;
        })}
      </ul>
    </div>
  );
};

export default TransactionList;
