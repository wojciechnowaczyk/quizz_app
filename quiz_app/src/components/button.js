import React from "react";
import Button from "@mui/material/Button";

const CustomButton = ({ title, onPress, styles, children }) => {
  return (
    <Button variant="contained" onClick={onPress} style={styles}>
      {title}
      {children}
    </Button>
  );
};

export default CustomButton;
