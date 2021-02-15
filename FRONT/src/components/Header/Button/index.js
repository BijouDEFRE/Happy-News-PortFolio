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
  children: PropTypes.node,
  type: PropTypes.string,
  event: PropTypes.func,
  name: PropTypes.string,
};
Button.defaultProps = {
  children: '',
  type: '',
  event: () => {},
  name: '',
};
export default Button;
