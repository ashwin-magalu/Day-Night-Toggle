import React, { createContext, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "./styles";

export const ThemeContext = createContext();

const ThemesProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("theme") || "lightTheme"
  );

  useEffect(() => {
    localStorage.setItem("theme", themeMode);
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode((prevState) => {
      if (prevState === "lightTheme") {
        return "darkTheme";
      } else {
        return "lightTheme";
      }
    });
  };

  const value = { toggleTheme, themeMode };
  const costumTheme = theme[themeMode];

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={costumTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemesProvider;
