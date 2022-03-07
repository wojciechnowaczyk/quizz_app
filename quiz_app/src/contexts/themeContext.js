import React, { useEffect } from "react";

const ThemeContext = React.createContext({
  theme: "light",
  toggleTheme: () => {},
});

const CustomThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState("dark");

  const toggleTheme = () => {
    console.log("toggleTheme");

    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { CustomThemeProvider, ThemeContext };
