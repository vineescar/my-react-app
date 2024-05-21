import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

test('addition operation', () => {
  render(<Calculator />);
  
  const num1Input = screen.getByPlaceholderText('Enter first number');
  const num2Input = screen.getByPlaceholderText('Enter second number');
  const addButton = screen.getByText('Addition');

  fireEvent.change(num1Input, { target: { value: '5' } });
  fireEvent.change(num2Input, { target: { value: '3' } });
  fireEvent.click(addButton);

  const addResult = screen.getByText('Addition Result: 8');
  expect(addResult).toBeInTheDocument();
});

test('subtraction operation', () => {
  render(<Calculator />);
  
  const num1Input = screen.getByPlaceholderText('Enter first number');
  const num2Input = screen.getByPlaceholderText('Enter second number');
  const subButton = screen.getByText('Subtraction');

  fireEvent.change(num1Input, { target: { value: '8' } });
  fireEvent.change(num2Input, { target: { value: '3' } });
  fireEvent.click(subButton);

  const subResult = screen.getByText('Subtraction Result: 5');
  expect(subResult).toBeInTheDocument();
});

test('multiplication operation', () => {
  render(<Calculator />);
  
  const num1Input = screen.getByPlaceholderText('Enter first number');
  const num2Input = screen.getByPlaceholderText('Enter second number');
  const mulButton = screen.getByText('Multiplication');

  fireEvent.change(num1Input, { target: { value: '5' } });
  fireEvent.change(num2Input, { target: { value: '3' } });
  fireEvent.click(mulButton);

  const mulResult = screen.getByText('Multiplication Result: 15');
  expect(mulResult).toBeInTheDocument();
});



test('division operation', () => {
  render(<Calculator />);
  
  const num1Input = screen.getByPlaceholderText('Enter first number');
  const num2Input = screen.getByPlaceholderText('Enter second number');
  const divButton = screen.getByText('Division');

  fireEvent.change(num1Input, { target: { value: '15' } });
  fireEvent.change(num2Input, { target: { value: '3' } });
  fireEvent.click(divButton);

  const divResult = screen.getByText('Division Result: 5');
  expect(divResult).toBeInTheDocument();
});
