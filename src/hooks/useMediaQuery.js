import { useState, useLayoutEffect } from "react";

const useMediaQuery = (size = 640) => {
  const [matches, setMatches] = useState(false);

  useLayoutEffect(() => {
    const query = `screen and (max-width: ${size}px)`;
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };

    try {
      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    } catch (error) {
      media.addListener(listener);
      return () => media.removeListener(listener);
    }
  }, [matches, size]);

  return matches;
};

export default useMediaQuery;
