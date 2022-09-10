import React, { createContext, useState } from "react";
import { darkTheme, lightTheme } from "../styles/Themes";

export const ThemeContext = createContext(null);

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const themeStyles = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeStyles }}>
      <>{children}</>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
