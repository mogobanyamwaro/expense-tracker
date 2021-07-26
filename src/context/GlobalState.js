import React, { createContext, useContext, useReducer } from 'react';
import AppReducer from './AppReducer';

function getLocalStorage() {
  return localStorage.getItem('transaction')
    ? JSON.parse(localStorage.getItem('transaction'))
    : [];
}
const amount = [getLocalStorage()];
console.log(amount);
// Initial state
const initialState = {
  transactions: [getLocalStorage()],
};
console.log(initialState.transactions);
// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  }
  function addToLocalStorage(transaction) {
    localStorage.setItem('transaction', JSON.stringify(transaction));
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        addToLocalStorage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

function useGlobalContext() {
  return useContext(GlobalContext);
}
export default useGlobalContext;
