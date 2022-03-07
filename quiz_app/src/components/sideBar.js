import React from "react";
import { ThemeContext } from "../contexts/themeContext";
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import DarkMode from "@mui/icons-material/DarkMode";
import LightMode from "@mui/icons-material/LightMode";
import Dashboard from "@mui/icons-material/Dashboard";
import Group from "@mui/icons-material/Group";
import QuestionMark from "@mui/icons-material/QuestionMark";
import Logout from "@mui/icons-material/Logout";
import { ButtonBase } from "@mui/material";
import Typography from "@mui/material/Typography";

const SideBar = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <Box sx={styles.navCol}>
      <ButtonBase href="/dashboard" sx={styles.navButton}>
        <Dashboard style={styles.icon} />
        Dashboard
      </ButtonBase>
      <ButtonBase href="/dashboard/users" sx={styles.navButton}>
        <Group style={styles.icon} />
        Users
      </ButtonBase>
      <ButtonBase href="/dashboard/quizzes" sx={styles.navButton}>
        <QuestionMark style={styles.icon} />
        Questions
      </ButtonBase>
      <IconButton color="primary" component="span" style={styles.iconButton}>
        <Logout style={styles.mainIcon} />
      </IconButton>
      <IconButton
        color="primary"
        component="span"
        onClick={toggleTheme}
        style={styles.iconButton}
      >
        {theme === "light" ? (
          <DarkMode color="primary" style={styles.mainIcon} />
        ) : (
          <LightMode color="primary" style={styles.mainIcon} />
        )}
      </IconButton>
      <Typography
        variant="caption"
        display="block"
        gutterBottom
        sx={styles.versionText}
      >
        Version 1.0.0
      </Typography>
    </Box>
  );
};

const styles = {
  navCol: {
    height: "100vh",
    width: "250px",
    position: "fixed",
    top: "0",
    left: "0",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: "40px 0px 40px 0px",
    borderRight: `3px solid`,
    borderColor: "primary.main",
  },
  icon: {
    marginRight: "20px",
  },
  navButton: {
    color: "primary.main",
    height: "100px",
    width: "100%",
    cursor: "pointer",
    fontSize: "22px",
    "&:hover": {
      backgroundColor: `primary.light`,
      color: "primary.contrastText",
    },
  },
  versionText: {
    color: "primary.main",
    position: "absolute",
    bottom: "10px",
  },
  mainIcon: {
    fontSize: "30px",
  },
  iconButton: {
    marginTop: "15px",
  },
};

export default SideBar;
