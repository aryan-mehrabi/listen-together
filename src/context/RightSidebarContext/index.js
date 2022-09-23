import { createContext, useState, useContext } from "react";

const RightSidebar = createContext({});

export const RightSidebarProvider = ({ children }) => {
  const [rightSidebar, setRightSidebar] = useState("");

  const value = {
    rightSidebar,
    setRightSidebar,
  };

  return (
    <RightSidebar.Provider {...{ value }}>{children}</RightSidebar.Provider>
  );
};

const useRightSidebar = () => {
  const context = useContext(RightSidebar);

  if (context === undefined) {
    throw new Error("useRightSidebar should be use within its provider");
  }

  return context;
};

export default useRightSidebar;
