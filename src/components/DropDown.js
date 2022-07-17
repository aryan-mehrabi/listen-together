import React, { useEffect } from "react";

const DropDown = ({ children, dropdown, setDropdown, dropdownRef }) => {
  useEffect(() => {
    const closeDropdown = event => {
      if (!dropdownRef.current?.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.body.addEventListener("click", closeDropdown);
    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <div
      className={`absolute right-0 shadow-md shadow-primary bg-neutral-800 w-40 text-center z-10 rounded-sm ${
        dropdown || "hidden"
      }`}
    >
      {children}
    </div>
  );
};

export default DropDown;
