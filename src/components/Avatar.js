import { overrideTailwindClasses } from "tailwind-override";

export const Avatar = ({ src, showListening, className = "" }) => {
  return (
    <div className="mt-2 relative">
      <img
        className={overrideTailwindClasses(`w-10 ${className}`)}
        src={src}
        alt="avatar"
      />
      {showListening && (
        <div className="w-6 h-6 animate-motioning grid items-center justify-center absolute translate-y-1/2 bottom-0 right-0 bg-secondary bg-opacity-90 rounded-full">
          <i className="fa-solid fa-music text-xs fa-fade text-cta"></i>
        </div>
      )}
    </div>
  );
};
