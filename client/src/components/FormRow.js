import React from "react";

const FormRow = ({ name, value, type, handleChange, labelText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        name={name}
        value={value}
        type={type}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
};

export default FormRow;
