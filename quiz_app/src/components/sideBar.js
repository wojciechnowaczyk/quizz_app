import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import LogotypeImg from "../assets/img/logo_expansio.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faUsers,
  faQuestion,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../contexts/themeContext";
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import DarkMode from "@mui/icons-material/DarkMode";
import LightMode from "@mui/icons-material/LightMode";
import palette from "../theme/colors";

const SideBar = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <Box style={styles.navCol}>
      <Logotype src={LogotypeImg} />
      <NavButton href="/dashboard">
        <FontAwesomeIcon icon={faChartLine} style={{ marginRight: "15px" }} />
        Dashboard
      </NavButton>
      <NavButton href="/dashboard/users">
        <FontAwesomeIcon icon={faUsers} style={{ marginRight: "15px" }} />
        Users
      </NavButton>
      <NavButton href="/dashboard/quizzes">
        <FontAwesomeIcon icon={faQuestion} style={{ marginRight: "15px" }} />
        Questions
      </NavButton>
      <LogoutButton>
        <FontAwesomeIcon icon={faSignOutAlt} />
      </LogoutButton>
      <IconButton color="primary" component="span" onClick={toggleTheme}>
        {theme === "light" ? (
          <DarkMode color="primary" />
        ) : (
          <LightMode color="primary" />
        )}
      </IconButton>
      <VersionBox>Version 1.0.0</VersionBox>
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
    borderRight: `3px solid ${palette.matisse}`,
  },
};

const Logotype = styled.img`
  width: 150px;
  margin-bottom: 25px;
`;

const LogoutButton = styled.div`
  color: ${palette.matisse};
  margin-top: 20px;
  cursor: pointer;
  & > svg {
    height: 25px;
    width: 25px !important;
    &:hover {
      height: 30px;
      width: 30px !important;
    }
  }
`;

const NavButton = styled.a`
  color: ${palette.matisse};
  background-color: ${palette.white};
  height: 100px;
  border: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 22px;
  cursor: pointer;
  &:hover {
    background-color: ${palette.matisse};
    color: ${palette.lightCyan};
  }
  &:active {
    background-color: ${palette.matisse};
    color: ${palette.lightCyan};
  }
`;

const VersionBox = styled.div`
  position: absolute;
  bottom: 10px;
  font-size: 10px;
  color: ${palette.matisse};
`;

export default SideBar;
