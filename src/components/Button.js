import React from "react";
import { overrideTailwindClasses } from "tailwind-override";

const Button = ({ type, className, children, disabled, onClick }) => {
  const defaultClasses = "rounded-lg py-2 px-4 disabled:opacity-50";

  const buttonStyle = () => {
    if (type === "cta") {
      return "bg-cta text-primary";
    }
    if (type === "primary") {
      return "border-neutral-500 text-secondary";
    }
    if (type === "secondary") {
      return "bg-secondary text-primary";
    }
    if (type === "danger") {
      return "bg-neutral-800 text-red-500";
    }
    if (type === "outlined") {
      return "text-cta border-[1px] border-cta";
    }
  };

  return (
    <button
      {...{ onClick, disabled }}
      className={overrideTailwindClasses(
        `${defaultClasses} ${buttonStyle()} ${className}`
      )}
    >
      {children}
    </button>
  );
};

export default Button;
