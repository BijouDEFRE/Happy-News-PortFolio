import React from 'react';
import './style.scss';

const Button = ({
  children, type, event, name,
}) => (
  <div>
    <button type={type} onClick={event} className="button" name={name}>
      {children}
    </button>
  </div>
);

export default Button;
