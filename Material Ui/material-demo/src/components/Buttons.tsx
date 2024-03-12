import React from "react";
import { Button, IconButton, ButtonGroup } from "@mui/material";
import Stack from "@mui/material/Stack";
import Sendicon from "@mui/icons-material/Send";
const Buttons = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={10} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
      </Stack>
      <Stack spacing={4} direction="row" sx={{ margin: "25px" }}>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" startIcon={<Sendicon />}>
          Send
        </Button>
        <Button variant="contained" endIcon={<Sendicon />}>
          Send
        </Button>
      </Stack>

      <Stack direction="row">
        <ButtonGroup variant="outlined" size="small" color="secondary">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
};

export default Buttons;
