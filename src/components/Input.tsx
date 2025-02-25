
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return <input className={`border p-2 rounded ${className}`} {...props} />;
};

export default Input;

