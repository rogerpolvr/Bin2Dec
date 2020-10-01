import React, { useState } from 'react';
import './App.css';

function App() {
  const [binary, setBinary] = useState('');
  const [decimal, setDecimal] = useState(Number);

  function convertBin2Dec(): void {
    setDecimal(parseInt(binary, 2));
    console.log(`Binary: ${binary}`);
    console.log(`Decimal: ${decimal}`);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bin2Dec</h1>
        <label>Insira um numero binário</label>
        <input
          name="input"
          value={binary}
          onChange={e => setBinary(e.target.value)}
          onKeyDown={convertBin2Dec}
        />
        <p>{decimal}</p>
      </header>
    </div>
  );
}

export default App;
