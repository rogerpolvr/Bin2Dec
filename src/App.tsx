import React, { useState } from 'react';
import './App.css';

function App() {
  const [binary, setBinary] = useState<string>('');

  const bin2dec = () => {
    if (binary !== '') return parseInt(binary, 2);
  };

  return (
    <div>
      <h1>Bin2Dec</h1>
      <label>Insira um numero binário</label>
      <input
        name="input"
        value={binary}
        onChange={e => setBinary(e.target.value)}
      />
      <p>{bin2dec()}</p>
    </div>
  );
}

export default App;
