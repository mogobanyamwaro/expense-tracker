import React from 'react';
import useGlobalContext from '../context/GlobalState';

const Transaction = ({ id, text, amount }) => {
  const { deleteTransaction } = useGlobalContext();
  const sign = amount > 0 ? '+' : '-';
  return (
    <div>
      <li className={amount > 0 ? 'plus' : 'minus'}>
        {text}{' '}
        <span>
          ${sign}
          {Math.abs(amount)}
        </span>
        <button onClick={() => deleteTransaction(id)} className="delete-btn">
          x
        </button>
      </li>
    </div>
  );
};

export default Transaction;
