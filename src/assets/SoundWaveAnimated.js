export default function SoundWaveAnimated() {
  const line = "stroke-secondary stroke-2 [strole-linecap: round]";
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line className={line} x1="3" y1="2" x2="3" y2="20">
        <animate
          attributeName="y1"
          dur="1s"
          repeatCount="indefinite"
          values="2; 8; 2"
        />
        <animate
          attributeName="y2"
          dur="1s"
          repeatCount="indefinite"
          values="20; 14; 20"
        />
      </line>

      <line className={line} x1="9" y1="2" x2="9" y2="20">
        <animate
          attributeName="y1"
          dur="1.2s"
          repeatCount="indefinite"
          values="2; 8; 2"
        />
        <animate
          attributeName="y2"
          dur="1.2s"
          repeatCount="indefinite"
          values="20; 14; 20"
        />
      </line>

      <line className={line} x1="15" y1="2" x2="15" y2="20">
        <animate
          attributeName="y1"
          dur="0.8s"
          repeatCount="indefinite"
          values="2; 8; 2"
        />
        <animate
          attributeName="y2"
          dur="0.8s"
          repeatCount="indefinite"
          values="20; 14; 20"
        />
      </line>

      <line className={line} x1="21" y1="2" x2="21" y2="20">
        <animate
          attributeName="y1"
          dur="1.5s"
          repeatCount="indefinite"
          values="2; 8; 2"
        />
        <animate
          attributeName="y2"
          dur="1.5s"
          repeatCount="indefinite"
          values="20; 14; 20"
        />
      </line>
    </svg>
  );
}
