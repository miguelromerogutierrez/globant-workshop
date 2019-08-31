import React from 'react';

const reducer = (state, {type, payload}) => {
  return { ...state, [type]: payload };
};

const useStateForm = (initialState) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const getPropsField = (key) => {
    return {
      id: `field-${key}`,
      name: key,
      value: state[key],
      onChange: (event) => {
        dispatch({ type: key, payload: event.target.value });
      }
    };
  }

  return {
    values: state,
    getPropsField
  };
};

const initialState = {
  amount: 300.00,
  name: '',
  paymentMethod: 'paymentMethod-ab',
  accountNumber: '2',
};

function App() {
  const { getPropsField, values } = useStateForm(initialState);

  return (
    <div className="App">
      <form>
        <div className="form-control">
          <label htmlFor="amount">Monto</label>
          <input
            {...getPropsField('amount')}
            type="text"
          />
        </div>

        <div className="form-control">
          <label htmlFor="name">Nombre</label>
          <input
            {...getPropsField('name')}
            type="text"
          />
        </div>

        <div className="form-control">
          <input
            {...getPropsField('paymentMethod')}
            id="paymentMethod-ab"
            value="paymentMethod-ab"
            checked={values.paymentMethod === 'paymentMethod-ab'}
            type="radio"
          />
          <label htmlFor="paymentMethod-ab">Cuenta bancaria</label>
        </div>
        
        <div className="form-control">
          <input
            {...getPropsField('paymentMethod')}
            id="paymentMethod-ac"
            value="paymentMethod-ac"
            checked={values.paymentMethod === 'paymentMethod-ac'}
            type="radio"
          />
          <label htmlFor="paymentMethod-ac">Cuenta con cheque</label>
        </div>

        <div className="form-control">
          <label>Cuenta</label>
          <select {...getPropsField('accountNumber')}>
            <option value="1">****1234</option>
            <option value="2">****2680</option>
            <option value="3">****3579</option>
          </select>
        </div>

      </form>
      <pre>
        { JSON.stringify(values, null, 4) }
      </pre>
    </div>
  );
}

export default App;
