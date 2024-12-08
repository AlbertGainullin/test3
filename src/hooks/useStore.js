import { createContext, useContext } from "react";

export const RootStoreContext = createContext(null);

export const useStore = () => {
  const context = useContext(RootStoreContext);

  if (!context) {
    throw new Error("Error: root store context is null");
  }

  return context;
};
