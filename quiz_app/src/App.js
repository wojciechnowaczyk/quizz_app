import React from "react";
import "./App.css";
import ThemeRender from "./helpers/themeRender";
import { CustomThemeProvider } from "./contexts/themeContext";
import CssBaseline from "@mui/material/CssBaseline";
import Navigation from "./routing";

function App() {
  return (
    <CustomThemeProvider>
      <ThemeRender>
        <CssBaseline />
        <div className="App">
          <Navigation />
        </div>
      </ThemeRender>
    </CustomThemeProvider>
  );
}

export default App;
