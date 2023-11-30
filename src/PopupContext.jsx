import React, { createContext, useContext, useState } from "react";

const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [visibility, setVisibility] = useState(false);
  const [message, setMessage] = useState({
    title: "",
    content: "",
  });

  const openModal = (title, content) => {
    setVisibility(true);
    setMessage({ title, content });
  };

  const closeModal = () => {
    setVisibility(false);
  };

  return (
    <PopupContext.Provider
      value={{ visibility, message, openModal, closeModal }}
    >
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => {
  return useContext(PopupContext);
};
