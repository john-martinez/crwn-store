import React from 'react';
import './index.scss';


export default function CustomButton({ children, type, ...otherProps }) {
  return <button className={`custom-button custom-button--${ type }-btn`} { ...otherProps }>{ children }</button>
}