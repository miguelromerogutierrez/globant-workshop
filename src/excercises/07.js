import React, { useMemo, useReducer } from 'react'

// ✋ Do not alter the below implementation
const reducer = (state, { key, type, payload }) => {
  switch(type) {
    case 'PENDING': 
      return {
        ...state,
        pending: true,
        success: false,
        error: false
      };
    case 'SUCCESS': 
      return {
        ...state,
        payload,
        success: true,
        pending: false
      };
    case 'ERROR': 
      return {
        ...state,
        payload,
        error: true,
        pending: false
      };
    default:
      return state;
  }
};

// ✋ Do not alter the below implementation
const states = {
    pending: false,
    payload: null,
    error: false,
    success: false
};

// ❕'service' must be a promise
function useRequestService(service) {
  // 🐢 Below we are 'hook in' the state of the request to the state of our component to provoke a render on every change
  const [fetchingState, setfetchingState] = useReducer(reducer, states);
  
  // 
  const api = {
    // 🐢 Define the api of our custom hook using the state of the request and then implementing the service passed as an argument
    // 🔥 spread the fetchingState first using spread operator '...'
    // 🔥 then implements a function called fetch, use the setfetchingState to manipulate the state of the request and execute the service
  };
  
  return api;
}

// ✋ Do not alter the below implementation
const services = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ status: 200 });
    }, 300);
  });
}

// ✋ Do not alter the below implementation
function App() {
  const {
    success,
    fetch = () => {},
    pending,
    error,
    payload
  } = useRequestService(services);
    
  return (
    <div className="App">
      {
        success ? <pre>{ JSON.stringify(payload) }</pre> : null
      }
      {
        error ? <p>An unexpected error happens</p> : null
      }
      <button
        onClick={ () => fetch() }
        disabled={pending}
      >Fetch!</button>
    </div>
  );
}

export default App;
