import React from 'react'

const users = {
  1: {
    name: 'Miguel Angel',
    email: 'miguel@mail.com'
  },
  2: {
    name: 'Rodrigo Benavides',
    email: 'rodrigo@mail.com'
  },
  3: {
    name: 'Sixto Mitre',
    email: 'sixto@mail.com'
  }
}

// 🐢 Create a user context with React.createContext

function UserProvider(props) {
  // 🐢 Use useState hook to handle the user state
  // then implement the hook in the below methods

  const login = (id) => {};

  const logout = () => {};

  const getUser = () => {};

  // 🐢 render the provider component of our user context
  // created previously.
  // 🔥 implements the user API as the value in the provider
  return (<div>Use custom hooks context</div>);
}

const useUser = () => {
  /**
  * 🔥 Implements React.useContext to use the user context
  */
  const context = {}
  return context;
}

const UnauthPage = (props) => {
  // 🐢 use the useUser hook in order to get the User API to login a new user
  const [id, setId] = React.useState(1);

  return (
    <div>
      <form action="#">
        <div className="form-control">
          <input type="text" value={id} onChange={({target}) => setId(target.value)} />
          <button>Login</button>
        </div>
      </form>
    </div>
  )
}

const AuthPage = (props) => {
  // 🐢 Retrieve the user by the useUser hook and show their data
  return (
    <div>
      <h1>A user</h1>
      <button>Logout</button>
    </div>
  );
}

const App = (props) => {
  /* 🐢: Implement a context hook that retrieve us
  * the user object value
  */
  // return getUser() === null ? <UnauthPage /> : <AuthPage />;
  return <div />
};

const Root = (props) => {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
}

export default Root;
