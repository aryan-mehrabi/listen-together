import React from "react";
import { createPortal } from "react-dom";

const ErrorBanner = ({ error }) => {
  return createPortal(
    <div
      className="absolute bottom-0 left-0 overflow-hidden m-5 max-w-xs
      rounded text-neutral-200 bg-red-600 bg-opacity-40 text-sm"
    >
      <div className="relative py-3 px-5">
        <p className="m-1.5">{error}</p>
        <div className="h-1 w-full absolute left-0 bottom-0 bg-red-700 bg-opacity-70 animate-progressbar"></div>
      </div>
    </div>,
    document.body
  );
};

export default ErrorBanner;
