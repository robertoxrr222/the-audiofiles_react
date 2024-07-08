import React from 'react';
import "../../../Styles/Atoms/Button.css";

//  =================================
//  ANDRE
//  =================================

const Button = ({ label, onClick }) => {
  return (
    <button className="button is-dark is-fullwidth is-large" onClick={onClick}>
      {label}
    </button>
  );
};

//  =================================
//  ANDRE
//  =================================

export default Button;
