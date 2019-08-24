import React from 'react'

const UserContext = React.createContext({});

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

function UserProvider(props) {
  const [user, setUser] = React.useState({});

  const login = (id) => {
    const user = users[id] || {};
    setUser(user);
  };

  const logout = () => {
    setUser({});
  };

  const getUser = () => {
    return user;
  };
  
  return (
    <UserContext.Provider value={{ login, logout, getUser }}>
      {props.children}
    </UserContext.Provider>
  );
}

const useUser = () => {
  const context = React.useContext(UserContext);
  
  if (!context) {
    throw new Error('useUser should be inside UserProvider');
  }
  return context;
}

const UnauthPage = (props) => {
  const { login } = useUser();
  const [id, setId] = React.useState(1);

  return (
    <div>
      <form action="#">
        <div className="form-control">
          <input type="text" value={id} onChange={({target}) => setId(target.value)} />
          <button type="button" onClick={() => login(id)}>Login</button>
        </div>
      </form>
    </div>
  )
}

const AuthPage = (props) => {
  const { getUser, logout } = useUser();
  return (
    <div>
      <h1>{getUser().name}</h1>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}

const isEmpty = (object) => Object.keys(object).length === 0;

const App = (props) => {
  const { getUser } = useUser();
  
  return isEmpty(getUser()) ? <UnauthPage /> : <AuthPage />;
};

const Root = (props) => {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
}

export default Root;
