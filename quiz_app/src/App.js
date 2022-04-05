import React from "react";
import "./App.css";
import ThemeRender from "./helpers/themeRender";
import { CustomThemeProvider } from "./contexts/themeContext";
import CssBaseline from "@mui/material/CssBaseline";
import Navigation from "./routing";
import axios from "axios";

//axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:3002";

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
