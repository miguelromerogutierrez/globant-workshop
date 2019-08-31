import React from 'react';

// 🔥Use this reducer for your state form hook
// const reducer = (state, {type, payload}) => {
//   return { ...state, [type]: payload };
// };

const useStateForm = (initialState) => {
  // 🐢 useState or useReducer could be useful for this example

  // 🐢 implements a get props field
  const getPropsField = () => {}

  // 🐢 Return the state form and the get props field
  return {};
};

const initialState = {
  amount: 300.00,
  name: '',
  paymentMethod: 'paymentMethod-ab',
  accountNumber: '2',
};

function App() {
  // 🐢 Here use the hook state form
  // then implement the getPropsField in every input field

  return (
    <div className="App">
      <form>
        <div className="form-control">
          <label htmlFor="amount">Monto</label>
          <input
            type="text"
          />
        </div>

        <div className="form-control">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
          />
        </div>

        <div className="form-control">
          <input
            type="radio"
          />
          <label htmlFor="paymentMethod-ab">Cuenta bancaria</label>
        </div>
        
        <div className="form-control">
          <input
            type="radio"
          />
          <label htmlFor="paymentMethod-ac">Cuenta con cheque</label>
        </div>

        <div className="form-control">
          <label>Cuenta</label>
          <select>
            <option value="1">****1234</option>
            <option value="2">****2680</option>
            <option value="3">****3579</option>
          </select>
        </div>

      </form>
    </div>
  );
}

export default App;
