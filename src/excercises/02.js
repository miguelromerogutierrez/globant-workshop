import React from 'react';

// const functions = new Set();

// const mapFormToKeys = {
//   amount: 'AMOUNT',
//   name: 'NAME',
//   paymentMethod: 'PAYMENT_METHOD',
//   accountNumber: 'ACCOUNT_NUMBER'
// }

// const reducer = (state, {type, payload}) => {
//   switch(type) {
//     case 'AMOUNT':
//       return { ...state, amount: payload };
//     case 'NAME':
//           return { ...state, name: payload };
//     case 'PAYMENT_METHOD':
//       return { ...state, paymentMethod: payload };
//     case 'ACCOUNT_NUMBER':
//       return { ...state, accountNumber: payload };
//     default: 
//     return state;
//   }
// };

// const initialState = {
//   amount: 300.00,
//   name: '',
//   paymentMethod: 'paymentMethod-ab',
//   accountNumber: '2',
// };

function App() {
  // 🐢: use React.useReducer hook to handle the state of this form
  // const [state, dispatch] = React.useReducer(reducer, initState);
  
  
  return (
    <div className="App">
      <form>
        <div className="form-control">
          <label htmlFor="amount">Monto</label>
          <input
            name="amount"
            id="amount"
            type="text"
          />
        </div>

        <div className="form-control">
          <label htmlFor="name">Nombre</label>
          <input
            name="name"
            id="name"
            type="text"
          />
        </div>

        <div className="form-control">
          <input
            name="paymentMethod"
            id="paymentMethod-ab"
            value="paymentMethod-ab"
            type="radio"
          />
          <label htmlFor="paymentMethod-ab">Cuenta bancaria</label>
        </div>
        
        <div className="form-control">
          <input
            name="paymentMethod"
            id="paymentMethod-ac"
            value="paymentMethod-ac"
            type="radio"
          />
          <label htmlFor="paymentMethod-ac">Cuenta con cheque</label>
        </div>

        <div className="form-control">
          <label>Cuenta</label>
          <select name="accountNumber">
            <option value="1">****1234</option>
            <option value="2">****2680</option>
            <option value="3">****3579</option>
          </select>
        </div>

      </form>
      {/* <pre>
        { JSON.stringify(state, null, 4) }
      </pre> */}
    </div>
  );
}

export default App;
