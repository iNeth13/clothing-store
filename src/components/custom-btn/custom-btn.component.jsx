import React from "react";
import "./custom-btn.styles.scss";

export default function CustomButton({buttonName,isGoogle,isCart,inverted,...otherProps}) {
  return (
      <button className={`${inverted?"add-to-cart":isGoogle?"google-button":isCart?"cart-button":""} sign-in-sign-up-btn`}  {...otherProps}>{buttonName.toUpperCase()}</button>
  );
}
