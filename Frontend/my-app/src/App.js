import React from 'react';
import './App.css';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Aplicación Frontend</h1>
        <p>{data ? data : "Cargando datos..."}</p>
      </header>
    </div>
  );
}

export default App;
