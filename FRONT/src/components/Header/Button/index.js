import React from 'react';
import './style.scss';

const Button = ({ children, type, event }) => (
  <div>
    <button type={type} onClick={event} className="button">
      {children}
    </button>
  </div>
);
export default Button;
