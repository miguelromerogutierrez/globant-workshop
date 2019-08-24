import React from 'react';
import './App.css';

const functions = new Set();

const mapFormToKeys = {
  amount: 'AMOUNT',
  name: 'NAME',
  paymentMethod: 'PAYMENT_METHOD',
  accountNumber: 'ACCOUNT_NUMBER'
}

const reducer = (state, {type, payload}) => {
  switch(type) {
    case 'AMOUNT':
      return { ...state, amount: payload };
    case 'NAME':
          return { ...state, name: payload };
    case 'PAYMENT_METHOD':
      return { ...state, paymentMethod: payload };
    case 'ACCOUNT_NUMBER':
      return { ...state, accountNumber: payload };
    default: 
    return state;
  }
};

const initialState = {
  amount: 300.00,
  name: '',
  paymentMethod: 'paymentMethod-ab',
  accountNumber: '2',
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const handleChangeState = React.useCallback((event) => {
    dispatch({ type: mapFormToKeys[event.target.name], payload: event.target.value })
  }, []);

  functions.add(handleChangeState);

  return (
    <div className="App">
      <form>
        <div className="form-control">
          <label htmlFor="amount">Monto</label>
          <input
            name="amount"
            id="amount"
            value={state.amount}
            onChange={handleChangeState}
            type="text"
          />
        </div>

        <div className="form-control">
          <label htmlFor="name">Nombre</label>
          <input
            name="name"
            id="name"
            value={state.name}
            onChange={handleChangeState}
            type="text"
          />
        </div>

        <div className="form-control">
          <input
            name="paymentMethod"
            id="paymentMethod-ab"
            value="paymentMethod-ab"
            onChange={handleChangeState}
            checked={state.paymentMethod === 'paymentMethod-ab'}
            type="radio"
          />
          <label htmlFor="paymentMethod-ab">Cuenta bancaria</label>
        </div>
        
        <div className="form-control">
          <input
            name="paymentMethod"
            id="paymentMethod-ac"
            value="paymentMethod-ac"
            onChange={handleChangeState}
            checked={state.paymentMethod === 'paymentMethod-ac'}
            type="radio"
          />
          <label htmlFor="paymentMethod-ac">Cuenta con cheque</label>
        </div>

        <div className="form-control">
          <label>Cuenta</label>
          <select name="accountNumber" value={state.accountNumber} onChange={handleChangeState}>
            <option value="1">****1234</option>
            <option value="2">****2680</option>
            <option value="3">****3579</option>
          </select>
        </div>

      </form>
      <div>
        Funciones creadas {functions.size}
      </div>
      <pre>
        { JSON.stringify(state, null, 4) }
      </pre>
    </div>
  );
}

export default App;
