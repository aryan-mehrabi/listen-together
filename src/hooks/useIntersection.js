import { useState, useEffect, useRef } from "react";
const useIntersection = element => {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "10px",
      threshold: 0.5,
    };
    const callback = ([entry]) => {
      setIsVisible(entry.isIntersecting);
    };
    observerRef.current = new IntersectionObserver(callback, options);
  }, []);

  useEffect(() => {
    observerRef.current.observe(element.current);
    return () => observerRef.current.disconnect();
  }, [element]);

  return isVisible;
};

export default useIntersection;
