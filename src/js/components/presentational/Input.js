import React from "react";
import ProTypes from "prop-types";
const Input = ({label, text, type, id, value, handleChange }) => (
    <div className="form-group">
        <label htmlFor={label}>{text}</label>
        <input
            type={type}
            className="form-control"
            id={id}
            value={value}
            onChange={handleChange}
            required
        />
    </div>
);
Input.prototype = {
    label: ProTypes.string.isRequired,
    text: ProTypes.string.isRequired,
    type: ProTypes.string.isRequired,
    id: ProTypes.string.isRequired,
    value: ProTypes.string.isRequired,
    handleChange: ProTypes.func.isRequired
};
export default Input;