import React from 'react';


function App() {
  // 🐢 useEffect hook allow us hook into the component lifecycle
  // in that way we can perform some actions on every re-render

  // 🔥Use useEffect to check the window size
  
  return (
    <div className="exsix">
      <span className="label">Window width</span>
      <span className="value"></span>
    </div>
  );
}

export default App;
