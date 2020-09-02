import React from 'react';

export default function InputField({
  label,
  inputState,
  onChangeHandler,
  type
}) {
  return (
    <div className="input-field">
      <label htmlFor={ label }>{ label }</label>
      <input 
        value={ inputState }
        onChange={ (e) => onChangeHandler(e.target) }
        name={ label }
        type={ type }
      />
    </div>
  )
}

InputField.defaultProps = {
  type: "text"
}
