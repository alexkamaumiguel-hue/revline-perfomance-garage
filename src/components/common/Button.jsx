import React from 'react';
import './Button.css';

const Button = ({ children, variant = 'primary', ...props }) => {
  const className = `btn ${variant === 'secondary' ? 'btn-secondary' : ''}`;
  
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;