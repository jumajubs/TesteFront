// import React from 'react';

// interface InputProps {
//   type: string;
//   name: string;
//   value: any;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }

// const Input: React.FC<InputProps> = ({ type, name, value, onChange }) => {
//   return <input type={type} name={name} value={value} onChange={onChange} className="input" />;
// };

// export default Input;

import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return <input className={`border p-2 rounded ${className}`} {...props} />;
};

export default Input;

