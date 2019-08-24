import React from 'react';

// const functions = new Set();

function App() {
  // 🐢 Use React.useState hook to control the form
  // 🔥 const [state, setState] = React.useState(initialState);

  // 🐢 Then add the onChange handles for every field
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
          <select name="accNumber">
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
