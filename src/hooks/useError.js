import React, { useEffect } from "react";
import ErrorBanner from "components/ErrorBanner";

const useError = (error, dismissError) => {
  useEffect(() => {
    if (error) {
      setTimeout(dismissError, 4500);
    }
  }, [error]);
  return error && <ErrorBanner error={error} />;
};

export default useError;
