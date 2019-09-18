import React, { useMemo, useReducer } from 'react'

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

const states = {
    pending: false,
    payload: null,
    error: false,
    success: false
};

function useRequestService(service) {
  const [fetchingState, setfetchingState] = useReducer(reducer, states);
  
  const api = useMemo(() => {
    return {
      ...fetchingState,
      fetch: async (...args) => {
        let payload = null;
        try {
          setfetchingState({ type: 'PENDING' });
          payload = await service(...args);
          setfetchingState({ type: 'SUCCESS', payload });
        } catch(error) {
          setfetchingState({ type: 'ERROR', payload });
        }
      }
    };
  });
  
  return api;
}

const services = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ status: 200 });
    }, 300);
  });
}

function App() {
  const {
    success,
    fetch,
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
