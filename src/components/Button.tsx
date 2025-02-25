// import React from 'react';

// type ButtonProps = {
//   onClick: () => void;
//   children: React.ReactNode;
// };

// const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
//   return <button onClick={onClick} className="btn">{children}</button>;
// };

// export default Button;

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
