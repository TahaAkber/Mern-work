import React from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";
const Textarea = () => {
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={4}>
        <TextField label="Name" variant="filled" color="secondary" required />
        <TextField label="Name" variant="outlined" color="primary" required />
        <TextField
          label="Name"
          variant="standard"
          color="success"
          required
          error
        />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
        />
        <TextField
          label="read Only"
          InputProps={{ readOnly: true }}
        ></TextField>
      </Stack>
    </Stack>
  );
};

export default Textarea;
