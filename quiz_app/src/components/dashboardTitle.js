import React from "react";
import styled from "styled-components";
import palette from "../theme/colors";
import { Typography } from "@mui/material";

const DashboardTitle = ({ title }) => {
  return <Typography variant="h1">{title}</Typography>;
};

export default DashboardTitle;
