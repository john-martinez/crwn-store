import React from 'react';
import './index.scss';


export default function CustomButton({ children, buttonType, ...otherProps }) {
  return <button className={`custom-button custom-button--${ buttonType }-btn`} { ...otherProps }>{ children }</button>
}