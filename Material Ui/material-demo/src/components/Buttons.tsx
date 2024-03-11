import React from "react";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
const Buttons = () => {
  return (
    <Stack spacing={10} direction="row-reverse">
      <Button variant="text">Text</Button>
      <Button variant="contained">contained</Button>
      <Button variant="outlined">outlined</Button>
    </Stack>
  );
};

export default Buttons;
