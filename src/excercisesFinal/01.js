import React from 'react';

const functions = new Set();

function App() {
  const [amount, setAmount] = React.useState(300.00);
  const [name, setName] = React.useState();
  const [paymentMethod, setPaymentMethod] = React.useState('paymentMethod-ab');
  const [accountNumber, setAccountNumber] = React.useState('2');

  const handleChangeAmount = React.useCallback((event) => {
    setAmount(event.target.value);
  }, []);

  const handleChangeName = React.useCallback((event) => {
    setName(event.target.value);
  }, []);

  const handleChangePaymentMethod = React.useCallback((event) => {
    setPaymentMethod(event.target.value);
  }, []);

  const handleChangeAccountNumber = React.useCallback((event) => {
    setAccountNumber(event.target.value);
  }, []);

  functions.add(handleChangeAmount);
  functions.add(handleChangeName);
  functions.add(handleChangePaymentMethod);
  functions.add(handleChangeAccountNumber);

  return (
    <div className="App">
      <form>
        <div className="form-control">
          <label htmlFor="amount">Monto</label>
          <input
            name="amount"
            id="amount"
            value={amount}
            onChange={handleChangeAmount}
            type="text"
          />
        </div>

        <div className="form-control">
          <label htmlFor="name">Nombre</label>
          <input
            name="name"
            id="name"
            value={name}
            onChange={handleChangeName}
            type="text"
          />
        </div>

        <div className="form-control">
          <input
            name="paymentMethod"
            id="paymentMethod-ab-ef"
            value="paymentMethod-ab"
            onChange={handleChangePaymentMethod}
            checked={paymentMethod === 'paymentMethod-ab'}
            type="radio"
          />
          <label htmlFor="paymentMethod-ab-ef">Cuenta bancaria</label>
        </div>
        
        <div className="form-control">
          <input
            name="paymentMethod"
            id="paymentMethod-ac-ef"
            value="paymentMethod-ac"
            onChange={handleChangePaymentMethod}
            checked={paymentMethod === 'paymentMethod-ac'}
            type="radio"
          />
          <label htmlFor="paymentMethod-ac-ef">Cuenta con cheque</label>
        </div>

        <div className="form-control">
          <label>Cuenta</label>
          <select name="accNumber" value={accountNumber} onChange={handleChangeAccountNumber}>
            <option value="1">****1234</option>
            <option value="2">****2680</option>
            <option value="3">****3579</option>
          </select>
        </div>

      </form>
      {/* <div>
        Funciones creadas {functions.size}
      </div> */}
      <pre>
        { JSON.stringify({
          amount,
          name,
          paymentMethod,
          accountNumber,
        }, null, 4) }
      </pre>
    </div>
  );
}

export default App;
