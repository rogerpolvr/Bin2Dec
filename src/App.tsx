import React, { useState } from 'react';
import './App.css';

function App() {
  const [binary, setBinary] = useState<string>('');

  const bin2dec = () => {
    if (binary !== '') return parseInt(binary, 2);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bin2Dec</h1>
        <label>Insira um numero binário</label>
        <input
          name="input"
          value={binary}
          onChange={e => setBinary(e.target.value)}
        />
        <h3>{bin2dec()}</h3>
      </header>
    </div>
  );
}

export default App;
