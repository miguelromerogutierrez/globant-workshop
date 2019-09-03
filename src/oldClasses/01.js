import React from 'react';

class App extends React.Component {
  
  state = {
    amount: 300.00,
    name: '',
    paymentMethod: '',
    accountNumber: ''
  };

  handleChangeAmount = (event) => {
    this.setState({ amount: event.target.value });
  };

  handleChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleChangePaymentMethod = (event) => {
    this.setState({ paymentMethod: event.target.value });
  };

  handleChangeAccountNumber = (event) => {
    this.setState({ accountNumber: event.target.value });
  };

  render () {

    return (
      <div className="App">
        <form>
          <div className="form-control">
            <label htmlFor="amount">Monto</label>
            <input
              name="amount"
              id="amount"
              value={this.state.amount}
              onChange={this.handleChangeAmount}
              type="text"
            />
          </div>
  
          <div className="form-control">
            <label htmlFor="name">Nombre</label>
            <input
              name="name"
              id="name"
              value={this.state.name}
              onChange={this.handleChangeName}
              type="text"
            />
          </div>
  
          <div className="form-control">
            <input
              name="paymentMethod"
              id="paymentMethod-ab-ef"
              value="paymentMethod-ab"
              onChange={this.handleChangePaymentMethod}
              checked={this.state.paymentMethod === 'paymentMethod-ab'}
              type="radio"
            />
            <label htmlFor="paymentMethod-ab-ef">Cuenta bancaria</label>
          </div>
          
          <div className="form-control">
            <input
              name="paymentMethod"
              id="paymentMethod-ac-ef"
              value="paymentMethod-ac"
              onChange={this.handleChangePaymentMethod}
              checked={this.paymentMethod === 'paymentMethod-ac'}
              type="radio"
            />
            <label htmlFor="paymentMethod-ac-ef">Cuenta con cheque</label>
          </div>
  
          <div className="form-control">
            <label>Cuenta</label>
            <select name="accNumber" value={this.state.accountNumber} onChange={this.handleChangeAccountNumber}>
              <option value="1">****1234</option>
              <option value="2">****2680</option>
              <option value="3">****3579</option>
            </select>
          </div>
  
        </form>
        <pre>
          { JSON.stringify(this.state, null, 4) }
        </pre>
      </div>
    );
  }
}

export default App;
