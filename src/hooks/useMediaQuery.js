import { useState, useEffect } from "react";

const useMediaQuery = query => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
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
      media.addListener(listener)
      return () => media.removeListener(listener)
    }
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
