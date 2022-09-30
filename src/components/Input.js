import React from "react";
import { overrideTailwindClasses } from "tailwind-override";

const Input = ({ placeholder, type, className, value, setValue }) => {
  const defautClasses =
    "bg-neutral-700 rounded-sm w-full p-2 outline-none";
  return (
    <input
      {...{ placeholder, type }}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={overrideTailwindClasses(`${defautClasses} ${className}`)}
    />
  );
};

export default Input;
