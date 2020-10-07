import React, { useState } from 'react';
import './App.css';

function App() {
  const [binary, setBinary] = useState<string>('');

  const bin2dec = () => {
    if (binary !== '') return parseInt(binary, 2);
  };

  const binaryCheck = (eventValue: string) => {
    let value = Number(eventValue),
      lastDigit = value % 10;

    if (lastDigit < 2) {
      setBinary(eventValue);
    } else {
      alert(`A Binary Number is made up of only 0s and 1s.`);
    }
  };

  return (
    <div className="container">
      <h1>Bin2Dec</h1>
      <label>Enter a binary number, get a decimal conversion.</label>
      <input
        name="input"
        maxLength={8}
        value={binary}
        onChange={event => binaryCheck(event.target.value)}
      />
      <p>{bin2dec()}</p>
    </div>
  );
}

export default App;
