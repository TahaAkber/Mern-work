import React from "react";
import { Stack, TextField } from "@mui/material";
const Textarea = () => {
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={4}>
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="outlined" />
        <TextField label="Name"  variant="standard"/>
      </Stack>
    </Stack>
  );
};

export default Textarea;
