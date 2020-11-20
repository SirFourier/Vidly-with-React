import React from "react";
import PropTypes from "prop-types";

function Select({ name, label, options, error, ...rest }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        className="custom-select"
        name={name}
        id={name}
        {...rest}
      >
        <option value=""></option>
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
};

export default Select;
