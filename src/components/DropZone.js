import React, { useRef } from "react";
import { overrideTailwindClasses } from "tailwind-override";

export default function DropZone({
  children,
  onDrop,
  onIsDraggedChange,
  className = "",
}) {
  const counter = useRef(0);

  const handleDragEnter = () => {
    counter.current += 1;
    onIsDraggedChange?.(true);
  };

  const handleDragLeave = () => {
    counter.current -= 1;
    if (counter.current === 0) {
      onIsDraggedChange?.(false);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onDrop(Array.from(e.dataTransfer.files));
    onIsDraggedChange?.(false);
  };

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={overrideTailwindClasses("contents " + className)}
    >
      {children}
    </div>
  );
}
