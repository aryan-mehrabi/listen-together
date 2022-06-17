import { useRef, useCallback, useEffect } from "react";

const useEventCallback = (fn, dependencies) => {
  const ref = useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });

  useEffect(() => {
    ref.current = fn;
  }, [fn, ...dependencies]);

  return useCallback(
    (...arg) => {
      const fn = ref.current;
      return fn(...arg);
    },
    [ref]
  );
};

export default useEventCallback;
