import React from "react";
import styles from "./Button.module.css";

const Button = ({ className, type, disabled, children, onClick }) => {
  return (
    <button
      // ${styles[`btn-${buttonSize}`]}
      className={`${className} ${styles.btn}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
