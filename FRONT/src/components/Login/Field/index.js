import PropTypes from 'prop-types';
import React from 'react';
import './style.scss';

const Field = ({
  type, value, name, onChange, placeholder, register,
}) => {
  const inputId = `input-${name}`;
  const handleChange = (event) => {
    onChange(event.target.value, name);
  };
  return (
    <>
      <label
        className="form__label"
        htmlFor={inputId}
      >
        {placeholder}
      </label>
      <input
        value={value}
        onChange={handleChange}
        id={inputId}
        type={type}
        className="form__input"
        placeholder={placeholder}
        name={name}
        ref={register}
      />
    </>
  );
};

Field.propTypes = {
  register: PropTypes.func.isRequired,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.oneOfType([PropTypes.number,
    PropTypes.string]).isRequired,
};

// Valeurs par défaut pour les props
Field.defaultProps = {
  value: '',
  placeholder: '',
};

export default Field;
