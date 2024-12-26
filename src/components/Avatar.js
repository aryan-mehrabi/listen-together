import SoundWaveAnimated from "assets/SoundWaveAnimated";
import { overrideTailwindClasses } from "tailwind-override";

export const Avatar = ({ src, showListening, className = "" }) => {
  return (
    <div
      className={overrideTailwindClasses(
        `shrink-0 mt-2 relative w-10 ${className}`
      )}
    >
      <img className="w-full" src={src} alt="avatar" />
      {showListening && (
        <div className="grid items-center justify-center absolute translate-y-1/2 bottom-0 -right-1  bg-opacity-90 rounded-full">
          <SoundWaveAnimated />
        </div>
      )}
    </div>
  );
};
