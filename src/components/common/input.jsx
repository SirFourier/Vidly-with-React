import React from "react";
import PropTypes from "prop-types";

function Input({ autoFocus, name, value, label, error, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus={autoFocus}
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        type="text"
        className="form-control"
      ></input>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

Input.propTypes = {
  autoFocus: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Input;
