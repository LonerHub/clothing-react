import React from 'react';
import './styles.scss';

const CustomButton = ({ children, isGoogleSignin, ...otherProps }) => {
  return (
    <button 
      className={`${isGoogleSignin? 'google-sign-in': ''} custom-button`} 
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default CustomButton;
