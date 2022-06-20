import { useEffect, useState } from "react";

const useDebouncing = (state, time) => {
  const [debouncedState, setDebouncedState] = useState(state);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedState(state), time);
    return () => clearTimeout(timeout);
  }, [state]);

  return debouncedState;
};

export default useDebouncing;
