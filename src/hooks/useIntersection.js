import { useState, useEffect } from "react";
const useIntersection = element => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (element) {
      const options = {
        root: null,
        rootMargin: "10px",
        threshold: 0.5,
      };
      const callback = ([entry]) => {
        setIsVisible(entry.isIntersecting);
      };
      const observer = new IntersectionObserver(callback, options);
      observer.observe(element);
      return () => observer.unobserve(element);
    }
  }, [element]);

  return isVisible;
};

export default useIntersection;
