import React, { useEffect } from "react";
import { overrideTailwindClasses } from "tailwind-override";

const DropDown = ({
  children,
  className,
  dropdown,
  setDropdown,
  dropdownRef,
}) => {
  useEffect(() => {
    const closeDropdown = (event) => {
      if (!dropdownRef.current?.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.body.addEventListener("click", closeDropdown);
    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <div
      className={overrideTailwindClasses(
        `absolute right-0 shadow-md shadow-primary bg-neutral-800 w-40 text-center z-10 rounded-sm ${
          dropdown || "hidden"
        } ${className}`
      )}
    >
      {children}
    </div>
  );
};

export default DropDown;
