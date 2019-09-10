import React from 'react';


function App() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const handleResize = () => {
    setWidth(window.innerWidth);
  }
  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); 
  return (
    <div className="exsix">
      <span className="label">Window width</span>
      <span className="value">{width}</span>
    </div>
  );
}

export default App;
