import React from "react";
import { Typography } from "@mui/material";

const DashboardTitle = ({ title }) => {
  return (
    <Typography variant="h2" color="primary.dark">
      {title}
    </Typography>
  );
};
export default DashboardTitle;
