import React from "react";
import TextField from "@mui/material/TextField";

const InputWithLabel = ({ label, id, onChange, placeholder }) => {
  return (
    <TextField
      id={id}
      name={id}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      label={label}
      variant="outlined"
      fullWidth
      margin="normal"
    />
  );
};

export default InputWithLabel;
