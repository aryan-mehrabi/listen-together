import { overrideTailwindClasses } from "tailwind-override";

export default function ImageBlob({ blob, className = "", alt }) {
  return (
    <img
      className={overrideTailwindClasses(
        `w-full h-full object-cover ${className}`
      )}
      src={URL.createObjectURL(blob)}
      alt={alt}
    />
  );
}
