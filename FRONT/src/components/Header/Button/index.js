import PropTypes from 'prop-types';
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
Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
export default Button;
