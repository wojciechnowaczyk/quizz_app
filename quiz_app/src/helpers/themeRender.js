import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ThemeContext } from "../contexts/themeContext";
import themeMode from "../theme";

const ThemeRender = ({ children }) => {
  const { theme } = React.useContext(ThemeContext);
  const currentTheme = React.useMemo(() =>
    createTheme(themeMode(theme), [theme])
  );
  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
};

export default ThemeRender;
