"use client";
import { createContext, useContext, useState } from "react";

const GlobalContext = createContext({
  data: [],
  setData: () => [],
  isOpen: [],
  setIsOpen: () => [],
});

export const GlobalContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState([]);

  return (
    <GlobalContext.Provider value={{ data, setData, isOpen, setIsOpen }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
