import React from 'react';
import './index.scss';

export default function InputField({
  label,
  inputState,
  onChangeHandler,
  type,
  name
}) {
  return (
    <div className="input-field">
      <label htmlFor={ name }>{ label }</label>
      <input 
        value={ inputState }
        onChange={ (e) => onChangeHandler(e.target) }
        name={ name }
        type={ type }
      />
    </div>
  )
}

InputField.defaultProps = {
  type: "text"
}
