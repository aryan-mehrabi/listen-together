import React, { useEffect, useState } from "react";
import { overrideTailwindClasses } from "tailwind-override";
import { usePopper } from "react-popper";
import useEventCallback from "hooks/useEventCallback";

const DropDown = ({
  children,
  position = "bottom-end",
  className = "",
  dropdown,
  setDropdown,
  dropdownRef,
}) => {
  const [popper, setPopper] = useState(null);
  const { styles, attributes, update } = usePopper(dropdownRef, popper, {
    placement: position,
    modifiers: [
      {
        name: "eventListeners",
        options: {
          scroll: false,
          resize: false,
        },
      },
    ],
  });

  const closeDropdown = useEventCallback(
    (event) => {
      if (!dropdownRef.contains(event.target)) {
        setDropdown(false);
      }
    },
    [dropdownRef]
  );

  useEffect(() => {
    document.body.addEventListener("click", closeDropdown);
    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  useEffect(() => {
    if (dropdown) {
      update();
    }
  }, [dropdown]);

  return (
    <div
      ref={setPopper}
      className={overrideTailwindClasses(
        `shadow-md shadow-primary bg-neutral-800 w-40 text-center rounded ${
          dropdown ? "" : "hidden"
        } ${className}`
      )}
      {...attributes.popper}
      style={styles.popper}
    >
      {children}
    </div>
  );
};

export default DropDown;
