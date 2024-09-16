import React from "react";
import { overrideTailwindClasses } from "tailwind-override";

const Input = ({ placeholder, type, className, value, setValue, ...props }) => {
  const defautClasses = "bg-neutral-700 rounded w-full p-2 outline-none";
  return (
    <input
      {...props}
      {...{ placeholder, type }}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={overrideTailwindClasses(`${defautClasses} ${className}`)}
    />
  );
};

export default Input;
