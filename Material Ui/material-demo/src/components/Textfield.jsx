import React from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";
const Textarea = () => {
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={4}>
        <TextField label="Name" variant="filled" color="secondary" />
        <TextField label="Name" variant="outlined" color="primary" />
        <TextField label="Name" variant="standard" color="success" />
      </Stack>
      <Stack spacing={4}>
        <TextField
          label="Amount"
          inputProps={{
            StartAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          inputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default Textarea;
