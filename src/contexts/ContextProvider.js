import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};
export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const[currentColor,SetCurrentColor] = useState('#03C9D7');
  const [currentMode,setCurrentMode] = useState('Light')
  const setMode =(e)=>{
    setCurrentMode(e.target.value)
  }
  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
    localStorage.setItem('themeMode', e.target.value);
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
