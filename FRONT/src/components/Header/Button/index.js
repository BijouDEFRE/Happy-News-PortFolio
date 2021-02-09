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

/* Button.propTypes = {
  className: PropTypes.string,
};

Button.defaultPropTypes = {
  className: "button",
}; */

export default Button;
