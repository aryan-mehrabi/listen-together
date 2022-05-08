import React, { createContext, useContext, useState } from "react";

const PageContext = createContext("loading");

export const PageProvider = ({ children }) => {
  const [page, setPage] = useState("loading");

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
};

const usePage = () => {
  const context = useContext(PageContext);
  
  if (context === undefined) {
    throw new Error("usePage should be use within its provider");
  }

  return context;
};

export default usePage;
