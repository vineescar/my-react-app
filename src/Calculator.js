import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [addResult, setAddResult] = useState('');
  const [subResult, setSubResult] = useState('');
  const [mulResult, setMulResult] = useState('');
  const [divResult, setDivResult] = useState('');

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleAddition = () => {
    try {
      setAddResult(parseFloat(num1) + parseFloat(num2));
    } catch (error) {
      setAddResult('Error');
    }
  };

  const handleSubtraction = () => {
    try {
      setSubResult(parseFloat(num1) - parseFloat(num2));
    } catch (error) {
      setSubResult('Error');
    }
  };

  const handleMultiplication = () => {
    try {
      setMulResult(parseFloat(num1) * parseFloat(num2));
    } catch (error) {
      setMulResult('Error');
    }
  };

  const handleDivision = () => {
    try {
      setDivResult(parseFloat(num1) / parseFloat(num2));
    } catch (error) {
      setDivResult('Error');
    }
  };

  return (
    <div>
      <h2>Calculator</h2>
      <div>
        <input
          type="number"
          value={num1}
          onChange={handleNum1Change}
          placeholder="Enter first number"
        />
        <input
          type="number"
          value={num2}
          onChange={handleNum2Change}
          placeholder="Enter second number"
        />
      </div>
      <button onClick={handleAddition}>Addition</button>
      <p>Addition Result: {addResult}</p>
      <button onClick={handleSubtraction}>Subtraction</button>
      <p>Subtraction Result: {subResult}</p>
      <button onClick={handleMultiplication}>Multiplication</button>
      <p>Multiplication Result: {mulResult}</p>
      <button onClick={handleDivision}>Division</button>
      <p>Division Result: {divResult}</p>
    </div>
  );
};

export default Calculator;
